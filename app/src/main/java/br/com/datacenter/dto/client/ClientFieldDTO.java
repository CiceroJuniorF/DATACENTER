package br.com.datacenter.dto.client;

import java.math.BigDecimal;

public class ClientFieldDTO {
	private Integer clientServiceId;
	private Integer id;
	private String name;
	private String dataType;
	private Byte required;
	/*Feld TYPE
	 * 0 - text
	 * 1 - radio
	 * 2 - check box
	 * 3 - combo box
	 * 4 - Additional  (possíbilidade de adicionar várias linhas)*/
	private Byte fieldType;
	private String fieldDescription;
	private String fieldValues;
	private String fieldValueDefault;
	private Byte isUsedForPrice;
	private String hint;
	private BigDecimal price;
	private String value;
	
	
	
	public ClientFieldDTO() {}
	
	public ClientFieldDTO(Integer idClientService, Integer id,String fieldDecription, String value) {
		this.clientServiceId = idClientService;
		this.id = id;
		this.fieldDescription = fieldDecription;
		this.value = value;
	}
	
	
	public ClientFieldDTO(Integer id, String name, String dataType, Byte required, Byte fieldType,
			String gieldDescription, String fieldValues, String fieldValueDefault, Byte isUsedForPrice, String hint,
			BigDecimal price) {
		this.id = id;
		this.name = name;
		this.dataType = dataType;
		this.required = required;
		this.fieldType = fieldType;
		this.fieldDescription = gieldDescription;
		this.fieldValues = fieldValues;
		this.fieldValueDefault = fieldValueDefault;
		this.isUsedForPrice = isUsedForPrice;
		this.hint = hint;
		this.price = price;
	}
	
	
	public Integer getClientServiceId() {
		return clientServiceId;
	}
	public void setClientServiceId(Integer clientServiceId) {
		this.clientServiceId = clientServiceId;
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
	public String getDataType() {
		return dataType;
	}
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}
	public Byte getRequired() {
		return required;
	}
	public void setRequired(Byte required) {
		this.required = required;
	}
	public Byte getFieldType() {
		return fieldType;
	}
	public void setFieldType(Byte fieldType) {
		this.fieldType = fieldType;
	}
	public String getFieldDescription() {
		return fieldDescription;
	}
	public void setFieldDescription(String gieldDescription) {
		this.fieldDescription = gieldDescription;
	}
	public String getFieldValues() {
		return fieldValues;
	}
	public void setFieldValues(String fieldValues) {
		this.fieldValues = fieldValues;
	}
	public String getFieldValueDefault() {
		return fieldValueDefault;
	}
	public void setFieldValueDefault(String fieldValueDefault) {
		this.fieldValueDefault = fieldValueDefault;
	}
	public Byte getIsUsedForPrice() {
		return isUsedForPrice;
	}
	public void setIsUsedForPrice(Byte isUsedForPrice) {
		this.isUsedForPrice = isUsedForPrice;
	}
	public String getHint() {
		return hint;
	}
	public void setHint(String hint) {
		this.hint = hint;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
	
	
	public String getValue() {	
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	@Override
	public String toString() {
		return "ClientFieldDTO [id=" + id + ", name=" + name + ", dataType=" + dataType + ", required=" + required
				+ ", fieldType=" + fieldType + ", fieldDescription=" + fieldDescription + ", fieldValues=" + fieldValues
				+ ", fieldValueDefault=" + fieldValueDefault + ", isUsedForPrice=" + isUsedForPrice + ", hint=" + hint
				+ ", price=" + price + ", value=" + value + "]";
	}
	
	public String toObjectSave(){
		return "{"+this.getId()+"|"+this.getValue()+"}";		
	}
	
	
	
	
	
}
