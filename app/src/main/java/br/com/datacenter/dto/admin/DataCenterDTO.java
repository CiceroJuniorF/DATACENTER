package br.com.datacenter.dto.admin;

public class DataCenterDTO {
	private Integer id;
	private String name;
	private Byte selected;
	public DataCenterDTO(Integer id, String name, Byte selected) {
		super();
		this.id = id;
		this.name = name;
		this.selected = selected;
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
	public Byte getSelected() {
		return selected;
	}
	public void setSelected(Byte selected) {
		this.selected = selected;
	}
	
	
	
	
	
	
	
	
}
