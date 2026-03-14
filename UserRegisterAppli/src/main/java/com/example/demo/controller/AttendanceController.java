package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Attendance;
import com.example.demo.service.AttendanceService;
@RestController
@CrossOrigin("*")
public class AttendanceController {

    @Autowired
    private AttendanceService service;

    @PostMapping("/attendance")
    public Attendance saveAttendance(@RequestBody Attendance attendance) {
        return service.saveAttendance(attendance);
    }

    @GetMapping("/attendance")
    public List<Attendance> getAttendance() {
        return service.getAllAttendance();
    }

    // 🔍 Filter by present days
    @GetMapping("/attendance/filter")
    public List<Attendance> filterAttendance(@RequestParam int days) {
        return service.filterByPresentDays(days);
    }
}
