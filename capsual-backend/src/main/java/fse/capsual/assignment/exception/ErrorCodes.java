package fse.capsual.assignment.exception;

public enum ErrorCodes {

	NO_RECORDS("CAP_001","No Records Found"),
	INVALID_REQUEST("CAP_002","Invalid Request"),
	TASK_ALREADY_EXIST("CAP_003","Task Already Exist"),
	SYS_DEFAULT_ERR("SYS_001","System is not available");
	
	private String code;
	private String description;
	
	private ErrorCodes(String code,String description) {
		this.code=code;
		this.description=description;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
