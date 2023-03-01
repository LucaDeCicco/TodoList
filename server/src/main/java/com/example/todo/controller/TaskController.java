package com.example.todo.controller;

import com.example.todo.model.Task;
import com.example.todo.payload.TaskRequest;
import com.example.todo.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/post")
    //TODO este ok ca dau return la un optional?
    public Optional<Task> postTask(@Valid @RequestBody TaskRequest taskRequest){
        return taskService.save(taskRequest);
    }

    @GetMapping("/get")
    public List<Task> getTasks(){
        return taskService.get();
    }

    @GetMapping("/todo")
    public List<Task> getToDoTasks(){
        return taskService.getToDo();
    }

    @GetMapping("/done")
    public List<Task> getDoneTasks(){
        return taskService.getDone();
    }

    //TODO de inlocuit void
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        taskService.delete(id);
    }
}
