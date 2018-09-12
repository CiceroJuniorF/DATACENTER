package br.com.datacenter.controllers;

import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.datacenter.dto.admin.ClientServiceDTO;
import br.com.datacenter.dto.admin.Message;
import br.com.datacenter.services.AdminService;

@RestController
@RequestMapping("admin/client-service")
@CrossOrigin(origins = "http://173.193.174.50:4200")
public class AdminClientServiceController {
	Logger logger = Logger.getLogger("datacenter");

	@Autowired
	AdminService service;
	
	@RequestMapping(value = "/search/{client-name}/{service-name}/{option}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientServiceDTO>> searchService(@PathVariable("client-name") String clientName,
			@PathVariable("service-name") String serviceName,@PathVariable("option")Integer option) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method searchService  parameter = " + clientName
				+ "          " + serviceName+"              "+option);
		String client = clientName.equals("vazio")? null: clientName;
		String service = serviceName.equals("vazio")? null: serviceName;
		
		try {
			return new ResponseEntity<List<ClientServiceDTO>>(this.service.clientServiceSarch(client, service, option), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/aprove/{idclient}/{iduser}/{action}", method = RequestMethod.GET)
	public ResponseEntity<Message> delete(@PathVariable("idclient") Integer idClient, @PathVariable("iduser") Integer idUser,
					@PathVariable("action")String action) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method service  parameter = " + idClient + idUser+action);
		try {
			return new ResponseEntity<Message>(service.aprovalClientService(idClient, idUser, action), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
