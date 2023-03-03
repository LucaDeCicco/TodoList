package com.example.todo.payloads;

import com.example.todo.enums.TaskType;
import jakarta.validation.constraints.*;
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
    @PositiveOrZero
    private int estimatedDays;
    @PositiveOrZero
    private int estimatedHours;
    @PositiveOrZero
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
