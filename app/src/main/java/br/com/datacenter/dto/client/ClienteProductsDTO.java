package br.com.datacenter.dto.client;

public class ClienteProductsDTO {
	private Integer amount;
	private String category;
	
	public ClienteProductsDTO() {}
	public ClienteProductsDTO(Integer amount, String category) {
		this.amount = amount;
		this.category = category;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "ClienteProductsDTO [amount=" + amount + ", category=" + category + "]";
	}
	
	
	
	
	
}
