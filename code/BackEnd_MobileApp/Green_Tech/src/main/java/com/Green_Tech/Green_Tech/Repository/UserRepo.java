package com.Green_Tech.Green_Tech.Repository;

import com.Green_Tech.Green_Tech.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String username);
}
