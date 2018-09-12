package br.com.datacenter.dto.client;

import java.math.BigDecimal;

public class ClientServiceItemDTO {
	private Integer clientServiceId;
	private Integer id;
	private String name;
	private String description;
	private Byte defaultSelected;
	private String labelForDescription;
	private BigDecimal price;
	private String typeName;
	private Byte status;
	
	public ClientServiceItemDTO() {}
	
	public ClientServiceItemDTO(Integer id, String typeName, String labelForDescription,BigDecimal price) {
		this.clientServiceId = id;
		this.labelForDescription = labelForDescription;
		this.price = price;
		this.typeName = typeName;
		
	}
	
	public ClientServiceItemDTO(Integer id, String name, String description, Byte defaultSelected,
			String labelForDescription, BigDecimal price, String typeName,Byte status) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.defaultSelected = defaultSelected;
		this.labelForDescription = labelForDescription;
		this.price = price;
		this.typeName = typeName;
		this.status = status;
	}

	
	public Integer getClientServiceId() {
		return clientServiceId;
	}

	public void setClientServiceId(Integer clientServiceId) {
		this.clientServiceId = clientServiceId;
	}

	public String getLabelForDescription() {
		return labelForDescription;
	}

	public void setLabelForDescription(String labelForDescription) {
		this.labelForDescription = labelForDescription;
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
	public Byte getDefaultSelected() {
		return defaultSelected;
	}
	public void setDefaultSelected(Byte defaultSelected) {
		this.defaultSelected = defaultSelected;
	}

	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ClientServiceItemDTO [id=" + id + ", name=" + name + ", description=" + description
				+ ", defaultSelected=" + defaultSelected + ", labelForDescription=" + labelForDescription + ", price="
				+ price + ", typeName=" + typeName + "]";
	}
	
	
	
	
	
}
