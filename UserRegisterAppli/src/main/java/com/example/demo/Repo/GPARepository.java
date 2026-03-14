package com.example.demo.Repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.GPA;

public interface GPARepository extends JpaRepository<GPA, Long> {

    List<GPA> findByGpa(double gpa);

    List<GPA> findByGpaBetween(double min, double max);
}
