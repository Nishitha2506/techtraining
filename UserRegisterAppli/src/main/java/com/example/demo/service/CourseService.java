package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.CourseRepository;
import com.example.demo.entity.Course;

@Service
public class CourseService {

    @Autowired
    private CourseRepository repo;

    public Course addCourse(Course course) {
        return repo.save(course);
    }

    public List<Course> getAllCourses() {
        return repo.findAll();
    }

    public Course getCourseById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteCourse(Long id) {
        repo.deleteById(id);
    }

    // 🔍 Search course
    public List<Course> searchCourse(String name) {
        return repo.findByCourseNameContainingIgnoreCase(name);
    }
}
