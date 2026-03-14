package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int presentDays;
    private int absentDays;

    @ManyToOne
    private User student;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public int getPresentDays() { return presentDays; }
    public void setPresentDays(int presentDays) { this.presentDays = presentDays; }

    public int getAbsentDays() { return absentDays; }
    public void setAbsentDays(int absentDays) { this.absentDays = absentDays; }

    public User getStudent() { return student; }
    public void setStudent(User student) { this.student = student; }
}
