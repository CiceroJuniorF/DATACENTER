package br.com.datacenter.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.datacenter.dto.LoginAccessDTO;
import br.com.datacenter.dto.client.ClientAreaDTO;
import br.com.datacenter.dto.client.ClientClientServiceDTO;
import br.com.datacenter.dto.client.ClientFieldDTO;
import br.com.datacenter.dto.client.ClientLoginDTO;
import br.com.datacenter.dto.client.ClientProductServiceDTO;
import br.com.datacenter.dto.client.ClientServiceAreaDTO;
import br.com.datacenter.dto.client.ClientServiceItemDTO;
import br.com.datacenter.dto.client.ClientSummaryDTO;
import br.com.datacenter.dto.client.ClienteDataCenterServiceDTO;
import br.com.datacenter.dto.client.ClienteProductsDTO;
import br.com.datacenter.repositories.ClientRepository;
import br.com.datacenter.utils.BigDecimalConvert;

@Service
public class ClientService {
	Logger logger = Logger.getLogger("datacenter");
	@Autowired
	ClientRepository repo;

	/*
	 * Object generic for loading DTO
	 * 
	 * 
	 */
	@Transactional
	public ClientLoginDTO login(LoginAccessDTO access) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login ");
		logger.info(" br.com.datacenter.repositories.ClientRepository Start consult in the method loginClient ");
		List<Object[]> result = repo.loginClient(access.getEmail(), access.getPassword());

		ClientLoginDTO dto = null;
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientLoginDTO((Integer) function[0], (Integer) function[1], (String) function[2],
						(Byte) function[3], (String) function[4], (String) function[5]);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + dto);
		return dto;
	}

	@Transactional
	public List<ClienteProductsDTO> productsClient(Integer idCliente) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  productsClient ");
		logger.info(" br.com.datacenter.repositories.ClientRepository Start consult in the method clientPorducts ");
		List<Object[]> result = repo.clientPorducts(idCliente);
		ClienteProductsDTO dto = null;
		List<ClienteProductsDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClienteProductsDTO((Integer) function[0], (String) function[1]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());
		return list;
	}

	@Transactional
	public List<ClientAreaDTO> areaClient() throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  areaClient ");
		logger.info(" br.com.datacenter.repositories.ClientRepository Start consult in the method clientAreas");
		List<Object[]> result = repo.clientAreas();
		ClientAreaDTO dto = null;
		List<ClientAreaDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientAreaDTO((Integer) function[0], (String) function[1], (String) function[2],
						(String) function[3]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());
		return list;
	}

	@Transactional
	public List<ClientServiceAreaDTO> clientServiceByArea(Integer idArea) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  clientServiceByArea ");
		logger.info(
				" br.com.datacenter.repositories.ClientRepository Start consult in the method clientServiceByArea ");
		List<Object[]> result = repo.clientServiceByArea(idArea);
		ClientServiceAreaDTO dto = null;
		List<ClientServiceAreaDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientServiceAreaDTO((Integer) function[0], (String) function[1], (String) function[2]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());
		return list;
	}

	@Transactional
	public List<ClienteDataCenterServiceDTO> clientDataCenterByService(Integer idService) throws SQLException {
		logger.info(
				"br.com.datacenter.service.cliente.ClientService Start the method login  clientDataCenterByService ");
		logger.info(
				" br.com.datacenter.repositories.ClientRepository Start consult in the method clientDataCenterByService ");
		List<Object[]> result = repo.clientDataCenterByService(idService);
		ClienteDataCenterServiceDTO dto = null;
		List<ClienteDataCenterServiceDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClienteDataCenterServiceDTO((Integer) function[0], (String) function[1],
						(String) function[2]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());
		return list;
	}

	@Transactional
	public ClienteDataCenterServiceDTO clientDataCenter(Integer idDataCenter) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  clientDataCenter ");
		logger.info(" br.com.datacenter.repositories.ClientRepository Start consult in the method clientDataCenter ");
		List<Object[]> result = repo.clientDataCenter(idDataCenter);
		ClienteDataCenterServiceDTO dto = null;

		if (result != null) {
			for (Object[] function : result) {
				dto = new ClienteDataCenterServiceDTO((Integer) function[0], (String) function[1],
						(String) function[2]);

			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + dto.toString());
		return dto;
	}

	@Transactional
	public List<ClientServiceItemDTO> clientServiceItemByService(Integer idService) throws SQLException {
		logger.info(
				"br.com.datacenter.service.cliente.ClientService Start the method login  clientServiceItemByService ");
		logger.info(
				" br.com.datacenter.repositories.ClientRepository Start consult in the method clientServiceItemByService ");
		List<Object[]> result = repo.clientServiceItemByService(idService);
		ClientServiceItemDTO dto = null;
		List<ClientServiceItemDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientServiceItemDTO((Integer) function[0], (String) function[1], (String) function[2],
						(Byte) function[3], (String) function[4], BigDecimalConvert.converter(function[5]),
						(String) function[6],(Byte)function[7]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());
		return list;
	}

	@Transactional
	public List<ClientFieldDTO> clientFieldsByService(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  clientFieldsByService ");
		logger.info(
				" br.com.datacenter.repositories.ClientRepository Start consult in the method clientFieldsByService ");
		List<Object[]> result = repo.clientFieldsByService(idService);
		ClientFieldDTO dto = null;
		List<ClientFieldDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientFieldDTO((Integer) function[0], (String) function[1], (String) function[2],
						(Byte) function[3], (Byte) function[4], (String) function[5], (String) function[6],
						(String) function[7], (Byte) function[8], (String) function[9],
						BigDecimalConvert.converter(function[10]));
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());

		return list;
	}

	@Transactional
	public Byte saveClientService(ClientSummaryDTO summary) {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  saveClientService ");
		logger.info(" br.com.datacenter.repositories.ClientRepository Start consult in the method saveClientService ");
		System.out.println("ToField:" + summary.toField() + "toService:" + summary.toService());
		return repo.saveClientService(summary.getIdUser(), summary.getIdClient(), summary.getDatacenter().getId(),
				summary.getIdService(), summary.toField(), summary.toService());
	}

	@Transactional
	public List<ClientClientServiceDTO> clientServiceByClient(Integer idArea, Integer idClientService)
			throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  clientServiceByClient ");
		logger.info(" br.com.datacenter.repositories.ClientRepository Start consult in the method serviceByClient ");
		List<Object[]> result = repo.serviceByClient(idArea, idClientService);
		ClientClientServiceDTO dto = null;
		List<ClientClientServiceDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {

				dto = new ClientClientServiceDTO((String) function[3], (String) function[4], (Date) function[5],
						(Date) function[6], (String) function[7], BigDecimalConvert.converter(function[8]),
						(Integer) function[9]);

				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());

		return list;
	}

	@Transactional
	public ClientProductServiceDTO clientProduct(Integer idClientService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.ClientService Start the method login  clientServiceByClient ");
		logger.info(
				" br.com.datacenter.repositories.ClienteRepository Start consult in the method serviceByClientService");
		logger.info(
				" br.com.datacenter.repositories.ClientRepository Start consult in the method fieldByClientService");
		List<Object[]> result = repo.serviceByClientService(idClientService);
		List<Object[]> result2 = repo.fieldByClientService(idClientService);
		ClientServiceItemDTO dto = null;
		ClientFieldDTO dto2 = null;
		List<ClientServiceItemDTO> list = new ArrayList<>();
		List<ClientFieldDTO> list2 = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {

				dto = new ClientServiceItemDTO((Integer) function[0], (String) function[1], (String) function[2],
						BigDecimalConvert.converter(function[3]));

				list.add(dto);
			}
		}

		if (result2 != null) {
			for (Object[] function : result2) {

				dto2 = new ClientFieldDTO((Integer) function[0], (Integer) function[1], (String) function[4],
						(String) function[3]);

				list2.add(dto2);
			}
		}

		logger.info("br.com.datacenter.repositories.ClientRepository return in consult " + list.toString());

		return new ClientProductServiceDTO(list2, list);
	}

}
