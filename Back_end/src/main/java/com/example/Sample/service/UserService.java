package com.example.Sample.service;

import com.example.Sample.model.User;
import com.example.Sample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        // Check if user exists and password matches
        return user != null && user.getPassword().equals(password);
    }
}
