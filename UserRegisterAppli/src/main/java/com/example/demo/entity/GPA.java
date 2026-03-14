package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class GPA {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double gpa;

    @ManyToOne
    private User student;

    @ManyToOne
    private Subject subject;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public double getGpa() { return gpa; }
    public void setGpa(double gpa) { this.gpa = gpa; }

    public User getStudent() { return student; }
    public void setStudent(User student) { this.student = student; }

    public Subject getSubject() { return subject; }
    public void setSubject(Subject subject) { this.subject = subject; }
}
