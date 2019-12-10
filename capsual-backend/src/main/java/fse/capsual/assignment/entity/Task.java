package fse.capsual.assignment.entity;

import java.util.Date;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import fse.capsual.assignment.response.Response;

@Entity
@Table(name = "task")
@JsonIgnoreProperties
public class Task extends Response {
	
	
	private Long id;
	
	
	//private Long parentID;
    private String task;
   
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDate;
   
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;
    
    private int priority;
    
    
    private boolean taskEnded;
    
    
    private ParentTask parent;
   
    private String parentTask;
    
    
    public Task() {
    	super();
    }
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	

	/*
	 * @Column(name="parentid") public Long getParentID() { return parentID; }
	 * 
	 * public void setParentID(Long parentID) { this.parentID = parentID; }
	 */


	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}


	public boolean isTaskEnded() {
		return taskEnded;
	}


	public void setTaskEnded(boolean taskEnded) {
		this.taskEnded = taskEnded;
	}


	


	 @Transient
	public String getParentTask() {
		return parentTask;
	}


	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}


	

	

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="parentid")
	public ParentTask getParent() {
		return parent;
	}

	public void setParent(ParentTask parent) {
		this.parent = parent;
	}
	 

	




    

}
