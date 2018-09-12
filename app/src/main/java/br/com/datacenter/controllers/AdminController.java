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

import br.com.datacenter.dto.admin.DataCenterDTO;
import br.com.datacenter.dto.admin.GroupDTO;
import br.com.datacenter.dto.admin.LanguageDTO;
import br.com.datacenter.dto.admin.Message;
import br.com.datacenter.dto.admin.ServiceAlterDTO;
import br.com.datacenter.dto.admin.ServiceDTO;
import br.com.datacenter.dto.admin.ServiceItenDTO;
import br.com.datacenter.dto.admin.ServicesDTO;
import br.com.datacenter.dto.client.ClientServiceItemDTO;
import br.com.datacenter.services.AdminService;

@RestController
@CrossOrigin(origins = "http://173.193.174.50:4200")
@RequestMapping("admin/service")
public class AdminController {
	Logger logger = Logger.getLogger("datacenter");

	@Autowired
	AdminService service;

	@RequestMapping(value = "/services/{name}/{status}", method = RequestMethod.GET)
	public ResponseEntity<List<ServicesDTO>> searchService(@PathVariable("name") String name,
			@PathVariable("status") Integer status) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method searchService  parameter = " + name
				+ "          " + status);
		try {
			if (!name.equals("vazio") && status == 3) {
				return new ResponseEntity<List<ServicesDTO>>(service.searchService(name, null), HttpStatus.OK);
			} else if (name.equals("vazio") && status != 3) {
				return new ResponseEntity<List<ServicesDTO>>(service.searchService(null, status), HttpStatus.OK);
			} else if (name.equals("vazio") && status == 3) {
				return new ResponseEntity<List<ServicesDTO>>(service.searchService(null, null), HttpStatus.OK);
			}
			return new ResponseEntity<List<ServicesDTO>>(service.searchService(name, status), HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/languages", method = RequestMethod.GET)
	public ResponseEntity<List<LanguageDTO>> listLanguage() {
		logger.info("br.com.datacenter.controllers.AdminController Start the method listLanguage  parameter = ");
		try {

			return new ResponseEntity<List<LanguageDTO>>(service.listLanguage(), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/service-iten-type", method = RequestMethod.GET)
	public ResponseEntity<List<ServiceItenDTO>> listServiceItenType() {
		logger.info("br.com.datacenter.controllers.AdminController Start the method listServiceItenType  parameter = ");
		try {

			return new ResponseEntity<List<ServiceItenDTO>>(service.listServiceItenType(), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/data-center/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<DataCenterDTO>> listDataCenter(@PathVariable("idService") Integer idService) {
		logger.info("br.com.datacenter.controllers.AdminController Start the method listDataCenter  parameter = "
				+ idService);
		try {

			if (idService == -1) {
				return new ResponseEntity<List<DataCenterDTO>>(service.listDataCenter(null), HttpStatus.OK);
			}
			return new ResponseEntity<List<DataCenterDTO>>(service.listDataCenter(idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/group/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<GroupDTO>> listGroup(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method listGroup  parameter = " + idService);
		try {

			if (idService == -1) {
				return new ResponseEntity<List<GroupDTO>>(service.listGroup(null), HttpStatus.OK);
			}
			return new ResponseEntity<List<GroupDTO>>(service.listGroup(idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/save-service", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Byte> login(@RequestBody ServiceAlterDTO dto) {
		logger.info("br.com.datacenter.controllers.ClientController Start the method login parameter =  " + dto.toString());

		try {
			Byte isSuccess = service.saveSevice(dto);
			return new ResponseEntity<Byte>(isSuccess, HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@RequestMapping(value = "/service/{idService}", method = RequestMethod.GET)
	public ResponseEntity<ServiceDTO> service(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method service  parameter = " + idService);
		try {
			return new ResponseEntity<ServiceDTO>(service.getService(idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/delete/{idService}", method = RequestMethod.DELETE)
	public ResponseEntity<Message> delete(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method service  parameter = " + idService);
		try {
			return new ResponseEntity<Message>(service.deleteService(idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/delete-field-iten/{type}/{idService}", method = RequestMethod.DELETE)
	public ResponseEntity<Message> deleteServiceItenAndServiceField(@PathVariable("type") String type,@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method service  parameter = " + idService);
		try {
			return new ResponseEntity<Message>(service.deleteServiceItenAndServiceField(type,idService), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/service-iten/{idService}", method = RequestMethod.GET)
	public ResponseEntity<List<ClientServiceItemDTO>> subservice(@PathVariable("idService") Integer idService) {
		logger.info(
				"br.com.datacenter.controllers.AdminController Start the method subservice parameter = " + idService);
		try {
			return new ResponseEntity<List<ClientServiceItemDTO>>(service.serviceItemByService(idService),
					HttpStatus.OK);
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	
}
