package com.example.todo.repository;

import com.example.todo.enums.TaskStatus;
import com.example.todo.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findTaskByStatus(TaskStatus status);
    //TODO ??
    void deleteById(Long id);
}
