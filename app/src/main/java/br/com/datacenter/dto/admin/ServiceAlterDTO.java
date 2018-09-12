package br.com.datacenter.dto.admin;

public class ServiceAlterDTO {
    private Integer id;
	private String name;
    private String description;
    private Integer area;
    private Integer status;
    private Integer language;
    private String serviceIten;
    private String field;
    private String dataCenters;
    private String group;
	private Integer chargingType;
	
	@Deprecated
	public ServiceAlterDTO() {};
	
	public ServiceAlterDTO(Integer id, String name, String description, Integer area, Integer status, Integer language,
			String serviceIten, String field, String dataCenters, String group, Integer chargingType) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.area = area;
		this.status = status;
		this.language = language;
		this.serviceIten = serviceIten;
		this.field = field;
		this.dataCenters = dataCenters;
		this.group = group;
		this.chargingType = chargingType;
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

	public Integer getArea() {
		return area;
	}

	public void setArea(Integer area) {
		this.area = area;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getLanguage() {
		return language;
	}

	public void setLanguage(Integer language) {
		this.language = language;
	}

	public String getServiceIten() {
		return serviceIten;
	}

	public void setServiceIten(String serviceIten) {
		this.serviceIten = serviceIten;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getDataCenters() {
		return dataCenters;
	}

	public void setDataCenters(String dataCenters) {
		this.dataCenters = dataCenters;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public Integer getChargingType() {
		return chargingType;
	}

	public void setChargingType(Integer chargingType) {
		this.chargingType = chargingType;
	}

	@Override
	public String toString() {
		return "ServiceAlterDTO [id=" + id + ", name=" + name + ", description=" + description + ", area=" + area
				+ ", status=" + status + ", language=" + language + ", serviceIten=" + serviceIten + ", field=" + field
				+ ", dataCenters=" + dataCenters + ", group=" + group + ", chargingType=" + chargingType + "]";
	}
	
	
	
	
	
	
}
