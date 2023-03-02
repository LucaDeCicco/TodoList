package com.example.todo.services;

import com.example.todo.enums.TaskStatus;
import com.example.todo.models.Task;
import com.example.todo.payloads.TaskRequest;
import com.example.todo.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    private boolean validate(TaskRequest taskRequest) {
        Date date = new Date();
        if (taskRequest.getDeadline().before(date)) {
            return false;
        }
        return taskRequest.getEstimatedDays() >= 0 &&
                taskRequest.getEstimatedHours() >= 0 &&
                taskRequest.getEstimatedMin() >= 0;
    }

    public void save(TaskRequest taskRequest) {
        boolean valid = validate(taskRequest);
        if (valid) {
            Task task = new Task(taskRequest.getTaskType(),
                    taskRequest.getName(),
                    taskRequest.getDeadline(),
                    taskRequest.getEstimatedDays(),
                    taskRequest.getEstimatedHours(),
                    taskRequest.getEstimatedMin()
            );
            taskRepository.save(task);
        }
    }

    public List<Task> get() {
        return taskRepository.findAll();
    }

    public List<Task> getTasksByStatus(TaskStatus taskStatus) {
        if (taskStatus.equals(TaskStatus.done)) {
            return taskRepository.findTaskByStatus(TaskStatus.done);
        } else {
            return taskRepository.findTaskByStatus(TaskStatus.todo);
        }
    }

    public List<Task> getTasksByStatusOrdered(TaskStatus taskStatus, String criteria) {
        if ("ascending".equals(criteria)) {
            return taskRepository.findTaskByStatusOrderByDeadlineAsc(taskStatus);
        }
        if ("descending".equals(criteria)) {
            return taskRepository.findTaskByStatusOrderByDeadlineDesc(taskStatus);
        } else {
            return taskRepository.findTaskByStatus(taskStatus);
        }
    }

    public void delete(Long id) {
        taskRepository.deleteById(id);
    }

    public void doneUpdate(Long id) {
        Task task = taskRepository.getReferenceById(id);
        task.setStatus(TaskStatus.done);
        taskRepository.save(task);
    }
}
