package com.Green_Tech.Green_Tech.Repository;

import com.Green_Tech.Green_Tech.Entity.JWT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface JWTRepo extends JpaRepository<JWT, Long> {
}
