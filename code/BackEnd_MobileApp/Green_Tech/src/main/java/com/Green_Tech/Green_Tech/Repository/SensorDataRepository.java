package com.Green_Tech.Green_Tech.Repository;

import com.Green_Tech.Green_Tech.Entity.SensorDatas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SensorDataRepository extends JpaRepository<SensorDatas, Long> {
    SensorDatas findFirstByOrderByIdDesc();
}
