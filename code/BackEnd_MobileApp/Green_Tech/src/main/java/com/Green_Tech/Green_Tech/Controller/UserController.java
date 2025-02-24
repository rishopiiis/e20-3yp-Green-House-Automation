package com.Green_Tech.Green_Tech.Controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth/user")
public class UserController {
    @GetMapping("/create")
    public String createUser() {
        return "User created successfully";
    }
}
