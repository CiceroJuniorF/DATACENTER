package br.com.datacenter.dto.client;

import java.math.BigDecimal;
import java.util.List;

public class ClientSummaryDTO {
	private Integer idClient;
	private Integer idUser;
	private Integer idService;
	private ClienteDataCenterServiceDTO datacenter;
	private List<ClientServiceItemDTO> serviceItem;
	private List<ClientFieldDTO> fields;
	private BigDecimal total;

	public ClientSummaryDTO() {
	}

	public ClientSummaryDTO(Integer idClient, Integer idUser, Integer idService, ClienteDataCenterServiceDTO datacenter,
			List<ClientServiceItemDTO> serviceItem, List<ClientFieldDTO> fields, BigDecimal total) {

		this.idClient = idClient;
		this.idUser = idUser;
		this.idService = idService;
		this.datacenter = datacenter;
		this.serviceItem = serviceItem;
		this.fields = fields;
		this.total = total;
	}

	public Integer getIdClient() {
		return idClient;
	}

	public void setIdClient(Integer idClient) {
		this.idClient = idClient;
	}

	public Integer getIdUser() {
		return idUser;
	}

	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public Integer getIdService() {
		return idService;
	}

	public void setIdService(Integer idService) {
		this.idService = idService;
	}

	public ClienteDataCenterServiceDTO getDatacenter() {
		return datacenter;
	}

	public void setDatacenter(ClienteDataCenterServiceDTO datacenter) {
		this.datacenter = datacenter;
	}

	public List<ClientServiceItemDTO> getServiceItem() {
		return serviceItem;
	}

	public void setServiceItem(List<ClientServiceItemDTO> serviceItem) {
		this.serviceItem = serviceItem;
	}

	public List<ClientFieldDTO> getFields() {
		return fields;
	}

	public void setFields(List<ClientFieldDTO> fields) {
		this.fields = fields;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public String toField() {
		String toField = "";
		String toFieldAdditional = "";
		int id = 0;

		for (ClientFieldDTO field : this.getFields()) {
			if (field.getFieldType() != 4) {
				toField += field.toObjectSave();
			}
		}
		for (ClientFieldDTO field : this.getFields()) {
			if (field.getFieldType() == 4) {				
				if (field.getId() != id) {
					id = field.getId();
					toFieldAdditional += "{" + id + "|";
					for (ClientFieldDTO field1 : this.getFields()) {
						if (field1.getId() == id) {
							toFieldAdditional += field1.getValue() + "][";
						}
					}
					toFieldAdditional = toFieldAdditional.substring(0, toFieldAdditional.length() - 2);
					toFieldAdditional += "}";
				}
			}
		}

		return toField + toFieldAdditional;
	}

	public String toService() {
		String toService = "";
		for (ClientServiceItemDTO service : this.getServiceItem()) {
			toService += service.getId() + ";";
		}
		toService = toService.substring(0, toService.length() - 1);
		return toService;
	}

	@Override
	public String toString() {
		return "ClientSummaryDTO [idClient=" + idClient + ", idUser=" + idUser + ", idService=" + idService
				+ ", datacenter=" + datacenter + ", serviceItem=" + serviceItem + ", fields=" + fields + ", total="
				+ total + "]";
	}

}
