package br.com.datacenter.dto.admin;

public class UserInfoDTO {
    public Integer id;
    public String nome;
    public String email;
    public String fone;
    public String senha;
    public Integer type;
    public Byte administrator;
	public UserInfoDTO(Integer id, String nome, String email, String fone, String senha, Integer type,
			Byte administrator) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.fone = fone;
		this.senha = senha;
		this.type = type;
		this.administrator = administrator;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFone() {
		return fone;
	}
	public void setFone(String fone) {
		this.fone = fone;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Byte getAdministrator() {
		return administrator;
	}
	public void setAdministrator(Byte administrator) {
		this.administrator = administrator;
	}
	@Override
	public String toString() {
		return "UserInfoDTO [id=" + id + ", nome=" + nome + ", email=" + email + ", fone=" + fone + ", senha=" + senha
				+ ", type=" + type + ", administrator=" + administrator + "]";
	}
    
    
}
