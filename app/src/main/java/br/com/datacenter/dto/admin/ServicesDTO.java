package br.com.datacenter.dto.admin;

public class ServicesDTO {
	
	private Integer id;
	private String name;
	private String status;
	private String description;
	private String area;
	
	
	public ServicesDTO(Integer id, String name, String status, String description, String area) {
		this.id = id;
		this.name = name;
		this.status = status;
		this.description = description;
		this.area = area;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	
	
}
