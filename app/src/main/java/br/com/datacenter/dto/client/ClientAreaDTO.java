package br.com.datacenter.dto.client;

public class ClientAreaDTO {
	private Integer id;
	private String name;
	private String partialDescription;
	private String fullDescription;

	public ClientAreaDTO() {}

	public ClientAreaDTO(Integer id, String name, String partialDescription, String fullDescription) {
		this.id = id;
		this.name = name;
		this.partialDescription = partialDescription;
		this.fullDescription = fullDescription;
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

	public String getPartialDescription() {
		return partialDescription;
	}

	public void setPartialDescription(String partialDescription) {
		this.partialDescription = partialDescription;
	}

	public String getFullDescription() {
		return fullDescription;
	}

	public void setFullDescription(String fullDescription) {
		this.fullDescription = fullDescription;
	}

	@Override
	public String toString() {
		return "ClientAreaDTO [id=" + id + ", name=" + name + ", partialDescription=" + partialDescription
				+ ", fullDescription=" + fullDescription + "]";
	}

}
