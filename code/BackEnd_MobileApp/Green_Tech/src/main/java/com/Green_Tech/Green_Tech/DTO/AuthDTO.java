package com.Green_Tech.Green_Tech.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthDTO {
    private String name;
    private String email;
    private String password;
    private String confirmPassword;
}
