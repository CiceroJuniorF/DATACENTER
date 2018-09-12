package br.com.datacenter.dto.admin;

public class GroupClientDTO {
	private Integer clientId;
	private Integer clienGroupId;
	private Integer groupTypeId;
	private String name;
	
	
	public GroupClientDTO(Integer clientId, Integer clienGroupId, Integer groupTypeId, String name) {
		super();
		this.clientId = clientId;
		this.clienGroupId = clienGroupId;
		this.groupTypeId = groupTypeId;
		this.name = name;
	}


	public Integer getClientId() {
		return clientId;
	}


	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}


	public Integer getClienGroupId() {
		return clienGroupId;
	}


	public void setClienGroupId(Integer clienGroupId) {
		this.clienGroupId = clienGroupId;
	}


	public Integer getGroupTypeId() {
		return groupTypeId;
	}


	public void setGroupTypeId(Integer groupTypeId) {
		this.groupTypeId = groupTypeId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	@Override
	public String toString() {
		return "GroupClientDTO [clientId=" + clientId + ", clienGroupId=" + clienGroupId + ", groupTypeId="
				+ groupTypeId + ", name=" + name + "]";
	}
	
}
