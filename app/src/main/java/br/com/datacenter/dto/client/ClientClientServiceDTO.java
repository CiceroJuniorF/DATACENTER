package br.com.datacenter.dto.client;

import java.math.BigDecimal;
import java.util.Date;

public class ClientClientServiceDTO {
	private String dataCenterName;
	private String serviceName;
	private Date registryDate;
	private Date approvalDate;
	private String status;
	private BigDecimal price;
	private Integer idClientService;
	
	
	public ClientClientServiceDTO() {}
	
	public ClientClientServiceDTO(String dataCenterName, String serviceName, Date registryDate, Date approvalDate,
			String status, BigDecimal price, Integer idClientService) {
		super();
		this.dataCenterName = dataCenterName;
		this.serviceName = serviceName;
		this.registryDate = registryDate;
		this.approvalDate = approvalDate;
		this.status = status;
		this.price = price;
		this.idClientService = idClientService;
	}

	public String getDataCenterName() {
		return dataCenterName;
	}

	public void setDataCenterName(String dataCenterName) {
		this.dataCenterName = dataCenterName;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public Date getRegistryDate() {
		return registryDate;
	}

	public void setRegistryDate(Date registryDate) {
		this.registryDate = registryDate;
	}

	public Date getApprovalDate() {
		return approvalDate;
	}

	public void setApprovalDate(Date approvalDate) {
		this.approvalDate = approvalDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Integer getIdClientService() {
		return idClientService;
	}

	public void setIdClientService(Integer idClientService) {
		this.idClientService = idClientService;
	}

	@Override
	public String toString() {
		return "ClientClientServiceDTO [dataCenterName=" + dataCenterName + ", serviceName=" + serviceName
				+ ", registryDate=" + registryDate + ", approvalDate=" + approvalDate + ", status=" + status
				+ ", price=" + price + ", idClientService=" + idClientService + "]";
	}
	
	
	
}
