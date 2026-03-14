package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.AttendanceRepository;
import com.example.demo.entity.Attendance;


@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository repo;

    public Attendance saveAttendance(Attendance attendance) {
        return repo.save(attendance);
    }

    public List<Attendance> getAllAttendance() {
        return repo.findAll();
    }

    public List<Attendance> filterByPresentDays(int days) {
        return repo.findByPresentDaysGreaterThanEqual(days);
    }
}
