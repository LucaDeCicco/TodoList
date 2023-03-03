package com.example.todo.payloads;

import com.example.todo.enums.TaskType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
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
}
