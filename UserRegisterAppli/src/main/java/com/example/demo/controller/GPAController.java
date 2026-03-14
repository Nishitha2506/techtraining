package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.GPA;
import com.example.demo.service.GPAService;
@RestController
@CrossOrigin("*")
public class GPAController {

    @Autowired
    private GPAService service;

    @PostMapping("/gpa")
    public GPA addGPA(@RequestBody GPA gpa) {
        return service.addGPA(gpa);
    }

    @GetMapping("/gpas")
    public List<GPA> getAllGPA() {
        return service.getAllGPA();
    }

    // 🔍 Search exact GPA
    @GetMapping("/gpa/search")
    public List<GPA> searchByGpa(@RequestParam double value) {
        return service.searchByGpa(value);
    }

    // 🔎 Filter GPA range
    @GetMapping("/gpa/range")
    public List<GPA> filterByRange(
            @RequestParam double min,
            @RequestParam double max) {
        return service.filterByRange(min, max);
    }
}
