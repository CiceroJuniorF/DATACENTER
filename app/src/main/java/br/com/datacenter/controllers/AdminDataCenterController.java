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

import br.com.datacenter.dto.client.ClienteDataCenterServiceDTO;
import br.com.datacenter.services.AdminService;

@RestController
@RequestMapping("admin/datacenter")
@CrossOrigin(origins = "http://173.193.174.50:4200")
public class AdminDataCenterController {
	Logger logger = Logger.getLogger("datacenter");

	@Autowired
	AdminService service;

	@RequestMapping(value = "/get/{name}", method = RequestMethod.GET)
	public ResponseEntity<List<ClienteDataCenterServiceDTO>> searchDataCEnter(@PathVariable("name") String name) {
		logger.info(
				"br.com.datacenter.controllers.AdminDataCenterController Start the method searchDataCEnter  parameter = "
						+ name);
		try {
			if (name.equals("vazio")) {
				return new ResponseEntity<List<ClienteDataCenterServiceDTO>>(service.getDataCenterSearch(null),
						HttpStatus.OK);
			} else {
				return new ResponseEntity<List<ClienteDataCenterServiceDTO>>(service.getDataCenterSearch(name),
						HttpStatus.OK);
			}
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/save-datacenter", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Integer> saveDataCenter(@RequestBody ClienteDataCenterServiceDTO dto) {
		logger.info(
				"br.com.datacenter.controllers.AdminDataCenterController Start the method saveDataCenter parameter =  "
						+ dto.toString());

		try {

			return new ResponseEntity<Integer>(service.saveDataCenter(dto), HttpStatus.OK);

		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
