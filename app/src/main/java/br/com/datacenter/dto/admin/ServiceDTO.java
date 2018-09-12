package br.com.datacenter.dto.admin;

public class ServiceDTO {
	private Integer id;
	private String name;
	private String description;
	private Byte status;
	private Integer language;
	private Integer area;
	private Byte chargingType;

	public ServiceDTO(Integer id, String name, String description, Byte status, Integer language, Integer area,
			Byte chargingType) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.status = status;
		this.language = language;
		this.area = area;
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

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public Integer getLanguage() {
		return language;
	}

	public void setLanguage(Integer language) {
		this.language = language;
	}

	public Integer getArea() {
		return area;
	}

	public void setArea(Integer area) {
		this.area = area;
	}

	public Byte getChargingType() {
		return chargingType;
	}

	public void setChargingType(Byte chargingType) {
		this.chargingType = chargingType;
	}

	@Override
	public String toString() {
		return "ServiceDTO [id=" + id + ", name=" + name + ", description=" + description + ", area=" + area
				+ ", status=" + status + ", language=" + language + ", chargingType=" + chargingType + "]";
	}

}
