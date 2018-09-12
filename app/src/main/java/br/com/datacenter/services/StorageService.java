package br.com.datacenter.services;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
 
@Service
public class StorageService {
 
	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("upload-dir");
	private  final String path = "C:/Users/dev/Ambiente Java/workspace/java-datacenterproject/upload-dir/";
	public void store(MultipartFile file) {
		try {
			File files = new File(path +file.getOriginalFilename());
			if(files.exists()){
				files.delete();
			}
			Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			System.out.println(e);
			throw new RuntimeException("FAIL!");
		}
	}
 
	public Resource loadFile(String filename) {
		try {
			Path file = rootLocation.resolve(filename);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
	}
 
	public String deleteFile(String fileName) {
		File files = new File(path +fileName+".png");
		try {
			if(files.exists()){
				files.delete();
			}
			return "Sucess";
		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
	}
 
	public void init() {
		File diretorio = new File(path);
		try {
			if(!diretorio.exists()) {
				Files.createDirectory(rootLocation);				
			}
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize storage!");
		}
	}
}
