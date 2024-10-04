package com.example.Sample.controller;

import com.example.Sample.model.User;
import com.example.Sample.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User request) {
        boolean isAuthenticated = userService.authenticate(request.getUsername(), request.getPassword());
        if (isAuthenticated) {
           return ResponseEntity.ok("{\"message\":\"Login successful!\"}"); // Example response

        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password!");
        }
    }
}
