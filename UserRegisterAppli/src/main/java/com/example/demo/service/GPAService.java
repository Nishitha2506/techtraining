package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.GPARepository;
import com.example.demo.entity.GPA;

@Service
public class GPAService {

    @Autowired
    private GPARepository repo;

    public GPA addGPA(GPA gpa) {
        return repo.save(gpa);
    }

    public List<GPA> getAllGPA() {
        return repo.findAll();
    }

    public List<GPA> searchByGpa(double gpa) {
        return repo.findByGpa(gpa);
    }

    public List<GPA> filterByRange(double min, double max) {
        return repo.findByGpaBetween(min, max);
    }
}
