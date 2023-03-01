package com.example.todo.models;

import com.example.todo.enums.TaskStatus;
import com.example.todo.enums.TaskType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private TaskType taskType;

    private String name;

    private Date deadline;

    private int estimatedDays;

    private int estimatedHours;

    private int estimatedMin;

    private TaskStatus status;

    private LocalDateTime date;

    public Task(TaskType taskType, String name, Date deadline, int estimatedDays, int estimatedHours, int estimatedMin) {
        this.taskType = taskType;
        this.name = name;
        this.deadline = deadline;
        this.estimatedDays = estimatedDays;
        this.estimatedHours = estimatedHours;
        this.estimatedMin = estimatedMin;
        this.status = TaskStatus.TODO;
        this.date = LocalDateTime.now();
    }
}
