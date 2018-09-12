package br.com.datacenter.application;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import br.com.datacenter.services.StorageService;

@SpringBootApplication
@ComponentScan({"br.com.datacenter"})
@EntityScan(basePackages = {"br.com.datacenter.entities"})
@EnableJpaRepositories(basePackages = {"br.com.datacenter.repositories"})
public class DataCenterApplication implements CommandLineRunner {
	@Resource
	StorageService storageService;
	
	public static void main(String[] args) {
		Logger logger = Logger.getLogger("datacenter");

		logger.info("Start Application");
		
		SpringApplication.run(DataCenterApplication.class, args);
		
	}

	@Override
	public void run(String... arg) throws Exception {
		Logger logger = Logger.getLogger("datacenter");

		logger.info("Create Folder of upload");
		//storageService.deleteAll();
		storageService.init();
	}
}
