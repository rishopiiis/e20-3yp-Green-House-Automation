package com.Green_Tech.Green_Tech.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth/user")
public class UserController {
    @PutMapping("/create")
    public String createUser() {
        return "User created successfully";
    }
}
