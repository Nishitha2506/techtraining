package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Course;
import com.example.demo.service.CourseService;
@RestController
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseService service;

    @PostMapping("/course")
    public Course addCourse(@RequestBody Course course) {
        return service.addCourse(course);
    }

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return service.getAllCourses();
    }

    @GetMapping("/course/{id}")
    public Course getCourse(@PathVariable Long id) {
        return service.getCourseById(id);
    }

    @DeleteMapping("/course/{id}")
    public void deleteCourse(@PathVariable Long id) {
        service.deleteCourse(id);
    }

  
    @GetMapping("/course/search")
    public List<Course> searchCourse(@RequestParam String name) {
        return service.searchCourse(name);
    }
}
