package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.Repo.UserRepo;
import com.example.demo.entity.User;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

   
    public User saveNewUser(User user) {
        return repo.save(user);
    }

   
    public User authUserEmailAndPassword(User user) {
        User user2 = repo.findByEmailAndPassword(
                user.getEmail(),
                user.getPassword()
        );

        if (user2 == null) {
            throw new RuntimeException("Invalid Details");
        }
        return user2;
    }
    public List<User> getAllUsers() {
    	return repo.findAll();
    }
    
    public void deleteUserById(Long id) {
		 repo.deleteById(id);;
    	
    }
    
    
    public User updateUser(Long id,User updatedUser) {
          User existingUser=  repo.findById(id)
        		    .orElseThrow(()-> new RuntimeException("User Not Found"));
          
         
          existingUser.setEmail(updatedUser.getEmail());
          return repo.save(existingUser);
    }


	
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    
}
