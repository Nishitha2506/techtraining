package com.example.demo.Repo;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

    List<Subject> findBySubjectNameContainingIgnoreCase(String subjectName);
}
