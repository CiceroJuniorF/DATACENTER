package br.com.datacenter.dto.admin;

public class LanguageDTO {
	public Integer id;
	public String name;
	public String currencySymbol;
	
	public LanguageDTO(Integer id, String name, String currencySymbol) {
		this.id = id;
		this.name = name;
		this.currencySymbol = currencySymbol;
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
	public String getCurrencySymbol() {
		return currencySymbol;
	}
	public void setCurrencySymbol(String currencySymbol) {
		this.currencySymbol = currencySymbol;
	}
	
	
}
