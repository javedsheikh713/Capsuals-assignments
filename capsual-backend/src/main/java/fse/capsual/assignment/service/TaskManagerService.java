package fse.capsual.assignment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fse.capsual.assignment.common.AppConstants;
import fse.capsual.assignment.entity.ParentTask;
import fse.capsual.assignment.entity.Task;
import fse.capsual.assignment.exception.AppException;
import fse.capsual.assignment.exception.ErrorCodes;
import fse.capsual.assignment.repository.ParentTaskRepository;
import fse.capsual.assignment.repository.TaskManagerRepository;
import fse.capsual.assignment.response.Response;
import fse.capsual.assignment.response.TaskListResponse;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class TaskManagerService {

	Logger log = LoggerFactory.getLogger(TaskManagerService.class);
	
	@Autowired
	private ParentTaskRepository parentTaskRepository;
	
	@Autowired
	private TaskManagerRepository taskManagerRepository;
	
	public Response addTask(Task task) {
		log.info("Start Method Add task");
		
		if(Objects.isNull(task)) {
			throw new AppException(ErrorCodes.INVALID_REQUEST);
		}
		
		Task existingTask=taskManagerRepository.findByTask(task.getTask());
		if(Objects.nonNull(existingTask)) {
			throw new AppException(ErrorCodes.TASK_ALREADY_EXIST);
		}
		
		ParentTask parent=null;
		
		  if(Objects.nonNull(task.getParentTask())) { 
			  parent=parentTaskRepository.findByParentTask(task.getParentTask()); 
			  
		  }
		 
		  if(Objects.isNull(parent)) {
			  parent=new ParentTask();
			  //parent.setParentTask(task.getParentTask());
		  }
		
		parent.setParentTask(task.getParentTask());
		//Set<Task> children = new HashSet<Task>();
	   // children.add(task);
		//parent.setTasks(children);
		
		//ParentTask newParentTask=parentTaskRepository.save(parent);
		//task.setParentID(newParentTask.getId());
		task.setParent(parent);
		taskManagerRepository.save(task);
		task.setSuccessMessage(AppConstants.ADD_SUCCESS_MESSAGE);
		log.info("Finish Method Add task");
		return task;
	}
	
	public Response updateTask(Task task) {
		log.info("Start Method update task");
		
		if(Objects.isNull(task)) {
			throw new AppException(ErrorCodes.INVALID_REQUEST);
		}
		
		ParentTask parent=null;
		if(Objects.nonNull(task.getParent().getParentTask())) { 
			  parent=parentTaskRepository.findByParentTask(task.getParent().getParentTask()); 
			  
		  }
		 
		  if(Objects.isNull(parent)) {
			  parent=new ParentTask();
			  //parent.setParentTask(task.getParentTask());
		  }
		
		//parent.setParentTask(task.getParentTask());
		task.setParent(parent);
		taskManagerRepository.save(task);
		task.setSuccessMessage(AppConstants.UPDATE_SUCCESS_MESSAGE);
		log.info("Finish Method update task");
		return task;
	}
	
	public Response searchTaskByID(long id) {
		log.info("Start Method searchTask task");
		if(Objects.isNull(id)) {
			throw new AppException(ErrorCodes.INVALID_REQUEST);
		}
		return taskManagerRepository.findOne(id);
		
	}
	
	public Response searchAllTask() {
		log.info("Start Method searchAllTask task");
		TaskListResponse response=new TaskListResponse();
		List<Task> taskList=taskManagerRepository.findAll();
		if(Objects.isNull(taskList) || taskList.isEmpty()) {
			throw new AppException(ErrorCodes.NO_RECORDS);
		}
		response.setTaskList(taskList);
		log.info("Finish method  getAllTask in service {} ",taskList.toString());
		return response;
	}
	
	public Response searchById(long id) {
		log.info("Start Method search task by id");
		Task response=new Task();
		response=taskManagerRepository.findOne(id);
		
		log.info("Finish method  searchById in service {} ");
		return response;
	}
	
	public Response endTaskById(long id) {
		log.info("Start Method End task by id");
		
		if(Objects.isNull(id)) {
			throw new AppException(ErrorCodes.INVALID_REQUEST);
		}
		Task response=new Task();
		response=taskManagerRepository.findOne(id);
		response.setTaskEnded(true);
		
		taskManagerRepository.save(response);
		response.setSuccessMessage(AppConstants.UPDATE_SUCCESS_MESSAGE);
		log.info("Finish Method Add task");
		return response;
	}
}
