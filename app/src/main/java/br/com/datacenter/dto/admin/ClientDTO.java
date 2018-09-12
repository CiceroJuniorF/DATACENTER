package br.com.datacenter.dto.admin;

public class ClientDTO {
    private Integer id;
	private String name;
	private String document;
    private Byte status;
    private String statusName;
    private String banda;
    private Integer languageId;
    private String group;
    private String ip;
    private String vlan;
    private String user;
    
    @Deprecated
    public ClientDTO() {}
    
	public ClientDTO(Integer id, String name,String document, Byte status, String statusName, String banda, Integer languageId) {
		this.id = id;
		this.name = name;
		this.document = document;
		this.status = status;
		this.statusName = statusName;
		this.banda = banda;
		this.languageId = languageId;
	}
	public ClientDTO(Integer id, String name, Byte status, String statusName, String banda, Integer languageId) {
		this.id = id;
		this.name = name;
		this.status = status;
		this.statusName = statusName;
		this.banda = banda;
		this.languageId = languageId;
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

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public String getStatusName() {
		return statusName;
	}

	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}

	public String getBanda() {
		return banda;
	}

	public void setBanda(String banda) {
		this.banda = banda;
	}

	public Integer getLanguageId() {
		return languageId;
	}

	public void setLanguageId(Integer languageId) {
		this.languageId = languageId;
	}
	

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getVlan() {
		return vlan;
	}

	public void setVlan(String vlan) {
		this.vlan = vlan;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "ClientDTO [id=" + id + ", name=" + name + ", status=" + status + ", statusName=" + statusName
				+ ", banda=" + banda + ", languageId=" + languageId + "]";
	}
	
	
    
    
}
