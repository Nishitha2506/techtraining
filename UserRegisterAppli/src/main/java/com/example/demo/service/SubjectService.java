package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.SubjectRepository;
import com.example.demo.entity.Subject;


@Service
public class SubjectService {

    @Autowired
    private SubjectRepository repo;

    public Subject addSubject(Subject subject) {
        return repo.save(subject);
    }

    public List<Subject> getAllSubjects() {
        return repo.findAll();
    }

    public void deleteSubject(Long id) {
        repo.deleteById(id);
    }


    public List<Subject> searchSubject(String name) {
        return repo.findBySubjectNameContainingIgnoreCase(name);
    }
}
