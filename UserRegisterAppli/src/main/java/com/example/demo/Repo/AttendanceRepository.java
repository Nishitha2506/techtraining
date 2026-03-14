package com.example.demo.Repo;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    List<Attendance> findByPresentDaysGreaterThanEqual(int days);
}
