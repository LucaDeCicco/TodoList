package com.example.todo.payload;

import com.example.todo.enums.TaskType;
import lombok.Getter;
import java.util.Date;
import jakarta.validation.constraints.NotBlank;

//TODO de facut validari
@Getter
public class TaskRequest {
    private TaskType taskType;
    @NotBlank
    private String name;
    private Date deadline;
    private int estimatedDays;
    private int estimatedHours;
    private int estimatedMin;
}
