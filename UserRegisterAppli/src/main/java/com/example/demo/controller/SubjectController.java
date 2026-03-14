package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Subject;
import com.example.demo.service.SubjectService;
@RestController
@CrossOrigin("*")
public class SubjectController {

    @Autowired
    private SubjectService service;

    @PostMapping("/subject")
    public Subject addSubject(@RequestBody Subject subject) {
        return service.addSubject(subject);
    }

    @GetMapping("/subjects")
    public List<Subject> getSubjects() {
        return service.getAllSubjects();
    }

    @DeleteMapping("/subject/{id}")
    public void deleteSubject(@PathVariable Long id) {
        service.deleteSubject(id);
    }

    // 🔍 Search
    @GetMapping("/subject/search")
    public List<Subject> searchSubject(@RequestParam String name) {
        return service.searchSubject(name);
    }
}
