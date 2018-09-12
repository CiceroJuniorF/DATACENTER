package br.com.datacenter.controllers;

import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
import br.com.datacenter.services.ClientService;

@RestController
@RequestMapping("client")
public class ClientController {

	Logger logger = Logger.getLogger("datacenter");

	@Autowired
	ClientService service;

	@RequestMapping(value = "/placeOrder", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ClientSummaryDTO> login(@RequestBody ClientSummaryDTO summary) {
		logger.info("br.com.datacenter.controllers.ClientController Start the method login parameter =  " + summary);
		Byte isSuccess = service.saveClientService(summary);
		
		if (isSuccess.equals(new Byte("1"))) {
			return new ResponseEntity<ClientSummaryDTO>(summary, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ClientLoginDTO> login(@RequestBody LoginAccessDTO access) {
		logger.info("br.com.datacenter.controllers.ClientController Start the method login parameter =  " + access);
		try {
			return new ResponseEntity<ClientLoginDTO>(service.login(access), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/myProducts/{idClient}", method = RequestMethod.GET)
	public ResponseEntity<List<ClienteProductsDTO>> myProducts(@PathVariable("idClient") Integer idClient) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method myProducts  parameter = " + idClient);
		try {
			return new ResponseEntity<List<ClienteProductsDTO>>(service.productsClient(idClient), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/areas", method = RequestMethod.GET)
	public ResponseEntity<List<ClientAreaDTO>> areas() {
		logger.info("br.com.datacenter.controllers.ClientController Start the method areas= ");
		try {
			return new ResponseEntity<List<ClientAreaDTO>>(service.areaClient(), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/services/{idArea}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientServiceAreaDTO>> services(@PathVariable("idArea") Integer idArea) {
		logger.info("br.com.datacenter.controllers.ClientController Start the method services  parameter = " + idArea);
		try {
			return new ResponseEntity<List<ClientServiceAreaDTO>>(service.clientServiceByArea(idArea), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/datacenter/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<ClienteDataCenterServiceDTO>> datacenter(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method datacenter parameter = " + idService);
		try {
			return new ResponseEntity<List<ClienteDataCenterServiceDTO>>(service.clientDataCenterByService(idService),
					HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/datacenters/{idDataCenter}", method = RequestMethod.GET)
	public ResponseEntity<ClienteDataCenterServiceDTO> datacenterByID(@PathVariable("idDataCenter") Integer idDataCenter) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method datacenter parameter = " + idDataCenter);
		try {
			return new ResponseEntity<ClienteDataCenterServiceDTO>(service.clientDataCenter(idDataCenter),
					HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/datacenters", method = RequestMethod.GET)
	public ResponseEntity<List<ClienteDataCenterServiceDTO>> datacenter() {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method datacenter parameter = " + null);
		try {
			return new ResponseEntity<List<ClienteDataCenterServiceDTO>>(service.clientDataCenterByService(null),
					HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/subservice/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientServiceItemDTO>> subservice(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method subservice parameter = " + idService);
		try {
			return new ResponseEntity<List<ClientServiceItemDTO>>(service.clientServiceItemByService(idService),
					HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/field/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientFieldDTO>> field(@PathVariable("idService") Integer idService) {
		logger.info("br.com.datacenter.controllers.ClientController Start the method field parameter = " + idService);
		try {
			return new ResponseEntity<List<ClientFieldDTO>>(service.clientFieldsByService(idService), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/client-service/{idArea}/{idClient}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientClientServiceDTO>> myProducts2(@PathVariable("idArea") Integer idArea,
			@PathVariable("idClient") Integer idClient) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method  myProducts2 parameter = " + idClient);
		try {
			return new ResponseEntity<List<ClientClientServiceDTO>>(service.clientServiceByClient(idArea, idClient), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/client-service/{idClientService}", method = RequestMethod.GET)
	public ResponseEntity<ClientProductServiceDTO> products(@PathVariable("idClientService") Integer idClientService) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method myProducts  parameter = " + idClientService);
		try {
			return new ResponseEntity<ClientProductServiceDTO>(service.clientProduct(idClientService), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
