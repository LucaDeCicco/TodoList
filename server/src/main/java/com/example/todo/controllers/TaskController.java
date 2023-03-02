package com.example.todo.controllers;

import com.example.todo.enums.TaskStatus;
import com.example.todo.models.Task;
import com.example.todo.payloads.TaskRequest;
import com.example.todo.services.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping()
    public void postTask(@Valid @RequestBody TaskRequest taskRequest) {
        taskService.save(taskRequest);
    }

    @GetMapping()
    public List<Task> getTasks() {
        return taskService.get();
    }

    @GetMapping("/{status}")
    public List<Task> getTasksByStatus(@PathVariable TaskStatus status) {
        return taskService.getTasksByStatus(status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        taskService.delete(id);
    }

    @PatchMapping("/{id}")
    public void doneUpdate(@PathVariable Long id) {
        taskService.doneUpdate(id);
    }

}
