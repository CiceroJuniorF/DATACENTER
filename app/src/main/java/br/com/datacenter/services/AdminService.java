package br.com.datacenter.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.datacenter.dto.admin.ClientDTO;
import br.com.datacenter.dto.admin.ClientServiceDTO;
import br.com.datacenter.dto.admin.DataCenterDTO;
import br.com.datacenter.dto.admin.GroupClientDTO;
import br.com.datacenter.dto.admin.GroupDTO;
import br.com.datacenter.dto.admin.IPDTO;
import br.com.datacenter.dto.admin.LanguageDTO;
import br.com.datacenter.dto.admin.Message;
import br.com.datacenter.dto.admin.ServiceAlterDTO;
import br.com.datacenter.dto.admin.ServiceDTO;
import br.com.datacenter.dto.admin.ServiceItenDTO;
import br.com.datacenter.dto.admin.ServicesDTO;
import br.com.datacenter.dto.admin.UserInfoDTO;
import br.com.datacenter.dto.admin.UserTypeDTO;
import br.com.datacenter.dto.admin.VLAN;
import br.com.datacenter.dto.client.ClientServiceItemDTO;
import br.com.datacenter.dto.client.ClienteDataCenterServiceDTO;
import br.com.datacenter.repositories.AdminRepository;
import br.com.datacenter.utils.BigDecimalConvert;
@Service
public class AdminService {
	
	Logger logger = Logger.getLogger("datacenter");
	@Autowired
	AdminRepository repo;
	///Inicio Service
	@Transactional
	public List<ServicesDTO> searchService(String name, Integer status ) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login searchService ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method searchService ");
		List<Object[]> result = repo.searchService(name, status);
		ServicesDTO dto = null;
		List<ServicesDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ServicesDTO((Integer)function[0],(String)function[1],(String)function[2],(String)function[3], (String)function[4]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	@Transactional
	public ServiceDTO getService(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login getService ");
		logger.info("br.com.datacenter.repositories.AdminRepository Start consult in the method getService ");
		List<Object[]> result = repo.serviceById(idService);
		ServiceDTO dto = null;
		
		if (result != null) {
			for (Object[] function : result) {
				dto = new ServiceDTO((Integer)function[0],(String)function[1],(String)function[2],(Byte)function[3], (Integer)function[4],(Integer)function[5], (Byte)function[6]);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	
	@Transactional
	public List<ClientServiceItemDTO> serviceItemByService(Integer idService) throws SQLException {
		logger.info(
				"br.com.datacenter.service.Admin Start the method login  serviceItemByService ");
		logger.info(
				" br.com.datacenter.repositories.AdminRepository Start consult in the method serviceItemByService ");
		List<Object[]> result = repo.serviceItemByService(idService);
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
		logger.info("br.com.datacenter.repositories.AdminRepositoryreturn in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public Message deleteService(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login deleteService ");
		logger.info("br.com.datacenter.repositories.AdminRepository Start consult in the method deleteService ");
		Message dto = new Message(repo.deleteService(idService));
	
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	
	public Message deleteServiceItenAndServiceField(String typeDelete,Integer idService) throws SQLException {
		Message dto = null;
		if(typeDelete.equals("iten")) {
			dto = new Message(repo.deleteServiceItem(idService));
		}else if(typeDelete.equals("field")) {
			dto = new Message(repo.deleteField(idService));
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	
	@Transactional
	public List<LanguageDTO> listLanguage() throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login listLanguage ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method listLanguage ");
		List<Object[]> result = repo.listLanguage();
		LanguageDTO dto = null;
		List<LanguageDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new LanguageDTO((Integer)function[0],(String)function[1],(String)function[2]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	@Transactional
	public List<ServiceItenDTO> listServiceItenType() throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login listServiceItenType() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method listServiceItenType() ");
		List<Object[]> result = repo.listServiceItenType();
		ServiceItenDTO dto = null;
		List<ServiceItenDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ServiceItenDTO((Integer)function[0],(String)function[1]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	@Transactional
	public List<DataCenterDTO > listDataCenter(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login listDataCenter() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method listDataCenter() ");
		List<Object[]> result = repo.listDataCenter(idService);
		DataCenterDTO dto = null;
		List<DataCenterDTO > list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new DataCenterDTO((Integer)function[0],(String)function[1], (Byte)function[2]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	@Transactional
	public List<GroupDTO> listGroup(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login listGroup() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method listGroup() ");
		List<Object[]> result = repo.listGroup(idService);
		GroupDTO dto = null;
		List<GroupDTO > list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new GroupDTO((Integer)function[0],(String)function[1], (Byte)function[2],(Byte)function[3]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public Byte saveSevice(ServiceAlterDTO dto)throws SQLException {

		return repo.saveService(dto.getId(), 
				dto.getName(), 
				dto.getDescription(), 
				dto.getStatus(), 
				dto.getLanguage(), 
				dto.getArea(), 
				dto.getChargingType(), 
				dto.getField(), 
				dto.getServiceIten(), dto.getDataCenters(), dto.getGroup());
	}
	
	//Inicio Client
	
	public List<ClientDTO> searchClient(String name, Integer status ) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login searchClient ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method searchClient ");
		List<Object[]> result = repo.searchClient(name, status);
		ClientDTO dto = null;
		List<ClientDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientDTO((Integer)function[0],(String)function[1],(Byte)function[2],
						(String)function[3], (String)function[4],(Integer)function[5]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public List<UserTypeDTO> listUserType() throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login listUserType() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method listUserType() ");
		List<Object[]> result = repo.listUserType();
		UserTypeDTO dto = null;
		List<UserTypeDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new UserTypeDTO((Integer)function[0],(String)function[1]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public Byte saveClient(ClientDTO dto)throws SQLException {
		System.out.println(	"declare @id_client tinyint exec SaveClient "+ 
				dto.getId()+", "+
				dto.getName()+", "+
				dto.getDocument()+", "+
				dto.getStatus()+", "+
				dto.getBanda()+", "+
				dto.getLanguageId()+", "+
				dto.getVlan()+", "+ 
				dto.getIp()+", " +
				dto.getGroup()+", " +
				dto.getUser()+", " +
			"@id_client out "+
			"select @id_client; "
				
				);
		return repo.saveClient(
				dto.getId(),
				dto.getName(),
				dto.getDocument(),
				dto.getStatus(),
				dto.getBanda(),
				dto.getLanguageId(),
				dto.getVlan(),
				dto.getIp(),
				dto.getGroup(),
				dto.getUser()
			);
	}
	
	@Transactional
	public List<GroupClientDTO> listClientGroup(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login listClientGroup() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method getClientGroup() ");
		List<Object[]> result = repo.getClientGroup(idService);
		GroupClientDTO dto = null;
		List<GroupClientDTO > list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new GroupClientDTO((Integer)function[0],(Integer)function[1],(Integer)function[2],(String)function[3]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public List<IPDTO> getIp(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login getIp() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method getIp() ");
		List<Object[]> result = repo.getIp(idService);
		IPDTO dto = null;
		List<IPDTO > list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new IPDTO((Integer)function[1],(String)function[2], (String)function[3]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public List<VLAN> getVlan(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login getVlan() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method getVlan() ");
		List<Object[]> result = repo.getVlan(idService);
		VLAN dto = null;
		List<VLAN > list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new VLAN((Integer)function[1],(Integer)function[2], (String)function[3]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public List<UserInfoDTO> getUserInfo(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login getIp() ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method getIp() ");
		List<Object[]> result = repo.getUserInfo(idService);
		UserInfoDTO dto = null;
		List<UserInfoDTO > list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new UserInfoDTO((Integer)function[1], (String)function[2], (String)function[3], (String)function[4], (String)function[8],(Integer)function[5], (Byte)function[9]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	public ClientDTO getClient(Integer idService ) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login getClient ");
		logger.info(" br.com.datacenter.repositories.AdminRepository Start consult in the method getClient ");
		List<Object[]> result = repo.getClient(idService);
		ClientDTO dto = null;
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientDTO((Integer)function[0],(String)function[1],(String)function[2],(Byte)function[3],
						(String)function[4], (String)function[5],(Integer)function[6]);
				
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	
	@Transactional
	public Message deleteUserInfo(Integer idService) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method deleteUserInfo ");
		logger.info("br.com.datacenter.repositories.AdminRepository Start consult in the method deleteUserInfo ");
		Message dto = new Message(repo.deleteUserInfo(idService));
	
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	@Transactional
	public Message deleteClient(Integer idClient) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method login deleteClient ");
		logger.info("br.com.datacenter.repositories.AdminRepository Start consult in the method deleteClient ");
		Message dto = new Message(repo.deleteClient(idClient));
	
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	
	//Inicio DataCenter
	@Transactional
	public List<ClienteDataCenterServiceDTO> getDataCenterSearch(String search) throws SQLException {
		logger.info(
				"br.com.datacenter.service.cliente.AdminService Start the method getDataCenterSearch ");
		logger.info(
				" br.com.datacenter.repositories.AdminRepository Start consult in the method getDataCenterSearch");
		List<Object[]> result = repo.getDataCenterSearch(search);
		ClienteDataCenterServiceDTO dto = null;
		List<ClienteDataCenterServiceDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClienteDataCenterServiceDTO((Integer) function[0], (String) function[1],
						(String) function[2]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public Integer saveDataCenter(ClienteDataCenterServiceDTO dto) throws SQLException{
		return repo.saveDataCenter(	dto.getId(), 
								 	dto.getName(), 
								 	dto.getDescription());
	}
	
	@Transactional
	public List<ClientServiceDTO> clientServiceSarch(String clientName,String serviceName,Integer option) throws SQLException {
		logger.info(
				"br.com.datacenter.service.cliente.AdminService Start the method clientServiceSarch ");
		logger.info(
				" br.com.datacenter.repositories.AdminRepository Start consult in the method clientServiceSarch");
		List<Object[]> result = repo.clientServiceSearch(clientName, serviceName, option);
		ClientServiceDTO dto = null;
		List<ClientServiceDTO> list = new ArrayList<>();
		if (result != null) {
			for (Object[] function : result) {
				dto = new ClientServiceDTO((Integer) function[0], (String) function[1], (String) function[2],
						(String) function[3],(String) function[4],(String) function[5]);
				list.add(dto);
			}
		}
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + list.toString());
		return list;
	}
	
	@Transactional
	public Message aprovalClientService(Integer idClient,Integer idUser,String action) throws SQLException {
		logger.info("br.com.datacenter.service.cliente.AdminService Start the method aprovalClientService ");
		logger.info("br.com.datacenter.repositories.AdminRepository Start consult in the method aprovalClientService or cancellClientService ");
		Message dto = null;
		if(action.equals("cancel")) {
			dto = new Message(repo.cancelClientService(idClient, idUser));
		}
		else if(action.equals("aprove")) {
			dto = new Message(repo.aprovalClientService(idClient, idUser));
		}	
	
		logger.info("br.com.datacenter.repositories.AdminRepository return in consult " + dto.toString());
		return dto;
	}
	
	
}
