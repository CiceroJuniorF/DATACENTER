package br.com.datacenter.dto.admin;

public class VLAN {
	private Integer id;
	private Integer vlan;
	private String name;
	
	
	public VLAN(Integer id, Integer vlan, String name) {
		this.id = id;
		this.vlan = vlan;
		this.name = name;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getVlan() {
		return vlan;
	}
	public void getVlan(Integer vlan) {
		this.vlan = vlan;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
