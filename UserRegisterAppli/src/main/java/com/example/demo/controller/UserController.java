		
		package com.example.demo.controller;
		

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;	
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User saveNewUser(@RequestBody User user) {
        return service.saveNewUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return service.authUserEmailAndPassword(user);
    }
   @GetMapping("/allUsers")
    public List<User> getUsers(){
    	return service.getAllUsers();
    }
   
   @DeleteMapping("/delete/{id}")
   public void deleteByid(@PathVariable Long id) {
	     service.deleteUserById(id);
   }
   
   @PutMapping("/update/{id}")
   public User updateUser(@PathVariable Long id ,@RequestBody User user) {
	   return service.updateUser(id, user);
	   
   }
    
    
    
    
    
    
    
    
    
   
}
