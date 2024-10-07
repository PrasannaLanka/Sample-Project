// package com.example.Sample.service;

// import com.example.Sample.model.User;
// import com.example.Sample.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class UserService {
//     @Autowired
//     private UserRepository userRepository;

//     public boolean authenticate(String username, String password) {
//         User user = userRepository.findByUsername(username);
//         // Check if user exists and password matches
//         return user != null && user.getPassword().equals(password);
//     }
// }
package com.example.Sample.service;

import com.example.Sample.model.User;
import com.example.Sample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Register a new user by hashing their password
    public void registerUser(User user) {
        // Hash the password
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        // Save the user to the repository (database)
        userRepository.save(user);
    }

    // Check if a user exists by username
    public boolean userExists(String username) {
        return userRepository.findByUsername(username) != null;
    }

    // Authenticate using hashed passwords
    public boolean authenticate(String username, String rawPassword) {
        User user = userRepository.findByUsername(username);

        if (user != null) {
            // Compare raw password with hashed password
            return passwordEncoder.matches(rawPassword, user.getPassword());
        }

        return false;
    }
}
