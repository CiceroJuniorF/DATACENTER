package br.com.datacenter.dto.admin;

public class IPDTO {
	private Integer id;
	private String range;
	private String banda;
	
	
	public IPDTO(Integer id, String range, String banda) {
		this.id = id;
		this.range = range;
		this.banda = banda;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getRange() {
		return range;
	}
	public void setRange(String range) {
		this.range = range;
	}
	public String getBanda() {
		return banda;
	}
	public void setBanda(String banda) {
		this.banda = banda;
	}
	
	
}
