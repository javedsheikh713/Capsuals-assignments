package fse.capsual.assignment.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import fse.capsual.assignment.entity.Task;

public interface TaskManagerRepository extends JpaRepository<Task, Long> {
	
	public Task findByTask(String task);

}
