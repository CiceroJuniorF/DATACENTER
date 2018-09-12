package br.com.datacenter.dto.client;

public class ClienteDataCenterServiceDTO {
	private Integer id;
	private String name;
	private String description;
	
	
	public ClienteDataCenterServiceDTO(){}


	public ClienteDataCenterServiceDTO(Integer id, String name, String description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return "ClienteDataCenterServiceDTO [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
	
	
	
}
