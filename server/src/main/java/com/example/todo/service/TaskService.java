package com.example.todo.service;

import com.example.todo.enums.TaskStatus;
import com.example.todo.model.Task;
import com.example.todo.payload.TaskRequest;
import com.example.todo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Optional<Task> save(TaskRequest taskRequest){

        Task task = new Task(taskRequest.getTaskType(),
                taskRequest.getName(),
                taskRequest.getDeadline(),
                taskRequest.getEstimatedDays(),
                taskRequest.getEstimatedHours(),
                taskRequest.getEstimatedMin()
                );
        //TODO cum se face aici try catch?
        taskRepository.save(task);
        return Optional.of(task);
    }

    public List<Task> get(){
        return taskRepository.findAll();
    }
}
