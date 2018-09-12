package br.com.datacenter.dto;

public class LoginAccessDTO {
	private String email;
	private String password;

	public LoginAccessDTO() {
	}

	public LoginAccessDTO(String email, String password) {

		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginAccessDTO [email=" + email + ", password=" + password + "]";
	}

	
}
