package br.com.datacenter.controllers;

import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.datacenter.dto.admin.ClientDTO;
import br.com.datacenter.dto.admin.GroupClientDTO;
import br.com.datacenter.dto.admin.IPDTO;
import br.com.datacenter.dto.admin.Message;
import br.com.datacenter.dto.admin.UserInfoDTO;
import br.com.datacenter.dto.admin.UserTypeDTO;
import br.com.datacenter.dto.admin.VLAN;
import br.com.datacenter.services.AdminService;

@RestController
@RequestMapping("admin/client")
@CrossOrigin(origins = "http://173.193.174.50:4200")
public class AdminClientController {
	Logger logger = Logger.getLogger("datacenter");

	@Autowired
	AdminService service;

	@RequestMapping(value = "/clients/{name}/{status}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientDTO>> searchService(@PathVariable("name") String name,
			@PathVariable("status") Integer status) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method searchService  parameter = " + name
				+ "          " + status);
		try {
			if (!name.equals("vazio") && status == 3) {
				return new ResponseEntity<List<ClientDTO>>(service.searchClient(name, null), HttpStatus.OK);
			} else if (name.equals("vazio") && status != 3) {
				return new ResponseEntity<List<ClientDTO>>(service.searchClient(null, status), HttpStatus.OK);
			} else if (name.equals("vazio") && status == 3) {
				return new ResponseEntity<List<ClientDTO>>(service.searchClient(null, null), HttpStatus.OK);
			}
			return new ResponseEntity<List<ClientDTO>>(service.searchClient(name, status), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/user-type", method = RequestMethod.GET)
	public ResponseEntity<List<UserTypeDTO>> listServiceItenType() {
		logger.info("br.com.datacenter.controllers.AdminController Start the method listServiceItenType  parameter = ");
		try {

			return new ResponseEntity<List<UserTypeDTO>>(service.listUserType(), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/save-client", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Byte> login(@RequestBody ClientDTO dto) {
		logger.info(
				"br.com.datacenter.controllers.ClientController Start the method login parameter =  " + dto.toString());

		try {
			Byte isSuccess = service.saveClient(dto);
			return new ResponseEntity<Byte>(isSuccess, HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/group/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<GroupClientDTO>> listClientGroup(@PathVariable("idService") Integer idService) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method listClientGroup  parameter = "
				+ idService);
		try {

			return new ResponseEntity<List<GroupClientDTO>>(service.listClientGroup(idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/user/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<UserInfoDTO>> userInfo(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method getUserInfo  parameter = " + idService);
		try {

			return new ResponseEntity<List<UserInfoDTO>>(service.getUserInfo(idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/client/{idService}", method = RequestMethod.GET)
	public ResponseEntity<ClientDTO> getClient(@PathVariable("idService") Integer idService) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method getClient  parameter = " + idService);
		try {
			return new ResponseEntity<ClientDTO>(service.getClient(idService), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/vlan/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<VLAN>> getVlan(@PathVariable("idService") Integer idService) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method getIP  parameter = " + idService);
		try {
			return new ResponseEntity<List<VLAN>>(service.getVlan(idService), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/ip/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<IPDTO>> getIP(@PathVariable("idService") Integer idService) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method getIP  parameter = " + idService);
		try {
			return new ResponseEntity<List<IPDTO>>(service.getIp(idService), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/delete-client/{idClient}", method = RequestMethod.DELETE)
	public ResponseEntity<Message> delete(@PathVariable("idClient") Integer idClient) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method service  parameter = " + idClient);
		try {
			return new ResponseEntity<Message>(service.deleteClient(idClient), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	

}
