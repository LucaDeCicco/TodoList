package com.example.todo.payloads;

import com.example.todo.enums.TaskType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.util.Date;

@Getter
public class TaskRequest {
    @NotNull
    private TaskType taskType;
    @NotBlank
    private String name;
    @NotNull
    private Date deadline;
    @NotNull
    private int estimatedDays;
    @NotNull
    private int estimatedHours;
    @NotNull
    private int estimatedMin;

    @Override
    public String toString() {
        return "TaskRequest{" +
                "taskType=" + taskType +
                ", name='" + name + '\'' +
                ", deadline=" + deadline +
                ", estimatedDays=" + estimatedDays +
                ", estimatedHours=" + estimatedHours +
                ", estimatedMin=" + estimatedMin +
                '}';
    }
}
