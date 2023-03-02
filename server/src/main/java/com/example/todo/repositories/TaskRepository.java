package com.example.todo.repositories;

import com.example.todo.enums.TaskStatus;
import com.example.todo.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findTaskByStatus(TaskStatus status);
//    List<Task> findTaskByStatusOrderByDeadlineAsc(TaskStatus status);
//    List<Task> findTaskByStatusOrderByDeadlineDesc(TaskStatus status);
}
