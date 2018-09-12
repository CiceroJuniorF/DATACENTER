package br.com.datacenter.dto.admin;

public class ClientServiceDTO {
	private Integer idServiceClient;
	private String clientName;
	private String document;
	private String areaName;
	private String serviceName;
	private String situation;

	public ClientServiceDTO(Integer idServiceClient, String clientName, String document, String areaName,
			String serviceName, String situation) {
		super();
		this.idServiceClient = idServiceClient;
		this.clientName = clientName;
		this.document = document;
		this.areaName = areaName;
		this.serviceName = serviceName;
		this.situation = situation;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public Integer getIdServiceClient() {
		return this.idServiceClient;
	}
	public void setIdServiceClient(Integer idServiceClient) {
		this.idServiceClient = idServiceClient;
	}
	public String getDocument() {
		return document;
	}
	public void setDocument(String document) {
		this.document = document;
	}
	public String getAreaName() {
		return areaName;
	}
	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public String getSituation() {
		return situation;
	}
	public void setSituation(String situation) {
		this.situation = situation;
	}

	@Override
	public String toString() {
		return "ClienServiceDTO [IdServiceClient=" + idServiceClient + ", document=" + document + ", areaName="
				+ areaName + ", serviceName=" + serviceName + ", situation=" + situation + "]";
	}
	
	
	
}
