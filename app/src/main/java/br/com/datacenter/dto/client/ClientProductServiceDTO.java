package br.com.datacenter.dto.client;

import java.util.List;

public class ClientProductServiceDTO {
	private List<ClientFieldDTO> field;
	private List<ClientServiceItemDTO> service;
	
	
	public ClientProductServiceDTO(List<ClientFieldDTO> field, List<ClientServiceItemDTO> service) {		
		this.field = field;
		this.service = service;
	}
	
	

	public List<ClientFieldDTO> getField() {
		return field;
	}
	public void setField(List<ClientFieldDTO> field) {
		this.field = field;
	}
	public List<ClientServiceItemDTO> getService() {
		return service;
	}
	public void setService(List<ClientServiceItemDTO> service) {
		this.service = service;
	}

	@Override
	public String toString() {
		return "ClientProductServiceDTO [field=" + field + ", service=" + service + "]";
	}
	
	
	
	
}
