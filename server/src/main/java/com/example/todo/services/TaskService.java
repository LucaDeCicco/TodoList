package com.example.todo.services;

import com.example.todo.enums.TaskStatus;
import com.example.todo.exceptions.TaskNotFoundException;
import com.example.todo.models.Task;
import com.example.todo.payloads.TaskRequest;
import com.example.todo.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    private boolean validate(TaskRequest taskRequest) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -1);
        Date yesterday = cal.getTime();
        System.out.println("yesterday: "+yesterday);
        System.out.println("request: "+taskRequest.getDeadline());
        if (taskRequest.getDeadline().before(yesterday)) {
            return false;
        }
        return taskRequest.getEstimatedDays() >=
                0 && taskRequest.getEstimatedHours() >=
                0 && taskRequest.getEstimatedMin() >= 0;
    }

    public void save(TaskRequest taskRequest) {
        boolean valid = validate(taskRequest);
        if (valid) {
            Task task = new Task(
                    taskRequest.getTaskType(),
                    taskRequest.getName(),
                    taskRequest.getDeadline(),
                    taskRequest.getEstimatedDays(),
                    taskRequest.getEstimatedHours(),
                    taskRequest.getEstimatedMin());
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

    public void delete(Long id) {
        if (taskRepository.getReferenceById(id).getStatus()!=TaskStatus.done){
            taskRepository.deleteById(id);
        }
    }

    public void doneUpdate(Long id) {
        if (taskRepository.getReferenceById(id).getStatus()!=TaskStatus.done){
            Task task = taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
            task.setStatus(TaskStatus.done);
            taskRepository.save(task);
        }
    }
}
