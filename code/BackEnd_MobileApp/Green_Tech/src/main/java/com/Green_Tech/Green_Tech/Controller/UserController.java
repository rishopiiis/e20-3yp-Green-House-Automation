package com.Green_Tech.Green_Tech.Controller;

import com.Green_Tech.Green_Tech.CustomException.UserAlreadyFoundException;
import com.Green_Tech.Green_Tech.CustomException.UserNotFoundException;
import com.Green_Tech.Green_Tech.DTO.AuthDTO;
import com.Green_Tech.Green_Tech.Entity.User;
import com.Green_Tech.Green_Tech.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth/user")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/create")
    public String createUser() {
        return "User created successfully";
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody AuthDTO authDTO) throws UserAlreadyFoundException {
        return ResponseEntity.ok(userService.createNewUser(authDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody AuthDTO authDTO) throws UserNotFoundException {
        return ResponseEntity.ok(userService.loginUser(authDTO));
    }
}
