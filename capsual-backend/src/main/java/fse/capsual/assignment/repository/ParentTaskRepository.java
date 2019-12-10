package fse.capsual.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fse.capsual.assignment.entity.ParentTask;


public interface ParentTaskRepository extends JpaRepository<ParentTask, Long> {

	
	public ParentTask findByParentTask(String parentTask);
}
