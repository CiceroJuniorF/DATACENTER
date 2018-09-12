package br.com.datacenter.dto.admin;

public class GroupDTO {
	private Integer id;
	private String name;
	private Byte status;
	private Byte selected;
	public GroupDTO(Integer id, String name, Byte status, Byte selected) {
		this.id = id;
		this.name = name;
		this.status = status;
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
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}
	public Byte getSelected() {
		return selected;
	}
	public void setSelected(Byte selected) {
		this.selected = selected;
	}
	
	

	
	

}
