package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.WeatherService;



@RestController
@CrossOrigin(originPatterns = "http://localhost:5173")
public class WeatherController 
{

    @Autowired
    WeatherService wservice;


    @GetMapping("/city/{city}")
    public String getWeather(@PathVariable String city) throws InterruptedException
     {
        System.out.println("-----------------------------------------");
        return this.wservice.getWeatherByCity(city);
    }
    

}