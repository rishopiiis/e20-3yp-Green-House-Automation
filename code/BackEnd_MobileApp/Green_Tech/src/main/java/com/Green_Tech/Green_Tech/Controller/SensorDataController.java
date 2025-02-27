package com.Green_Tech.Green_Tech.Controller;

import com.Green_Tech.Green_Tech.DTO.SensorDataDTO;
import com.Green_Tech.Green_Tech.Entity.SensorDatas;
import com.Green_Tech.Green_Tech.Service.SensorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sensors")
@CrossOrigin
public class SensorDataController {

    @Autowired
    private SensorDataService sensorDataService;

    @GetMapping(value = "/currentData")
    public SensorDatas getAllSensorData() {
        return sensorDataService.getAllSensorData();
    }
}
