package br.com.datacenter.dto.client;

public class ClientLoginDTO {
	private Integer clientId;
	private Integer userIfoId;
	private String email;
	private Byte administrator;
	private String type;
	private String typeName;

	public ClientLoginDTO() {
	}

	public ClientLoginDTO(Integer clientId, Integer userIfoId, String email, Byte administrator, String type,
			String typeName) {

		this.clientId = clientId;
		this.userIfoId = userIfoId;
		this.email = email;
		this.administrator = administrator;
		this.type = type;
		this.typeName = typeName;
	}

	public Integer getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	public Integer getUserIfoId() {
		return userIfoId;
	}

	public void setUserIfoId(Integer userIfoId) {
		this.userIfoId = userIfoId;
	}

	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public Byte getAdministrator() {
		return administrator;
	}

	public void setAdministrator(Byte administrator) {
		this.administrator = administrator;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	@Override
	public String toString() {
		return "ClienteLoginDTO [clientId=" + clientId + ", userIfoId=" + userIfoId + ", email=" + email
				+ ", administrator=" + administrator + ", type=" + type + ", typeName=" + typeName + "]";
	}

}
