package br.com.datacenter.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://173.193.174.50:4200")
@RequestMapping("token")
public class LoginController {
//	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<String> login(@RequestBody LoginAccessDTO dto) {
//			return new ResponseEntity<String>("LOGADO", HttpStatus.OK);
//	}
}
