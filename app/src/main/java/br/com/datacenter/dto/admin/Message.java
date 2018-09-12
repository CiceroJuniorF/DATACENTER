package br.com.datacenter.dto.admin;

public class Message {
	private String message;	
	private Byte action;
	
	
	public Message(String message) {
		this.message = message;
		if(this.message == null || this.message.equals(""))
		{
			this.action = 1;
		}else {
			this.action = 0;
		}
	}
	
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Byte getAction() {
		return action;
	}
	public void setAction(Byte action) {
		this.action = action;
	}
	
	
	
}
