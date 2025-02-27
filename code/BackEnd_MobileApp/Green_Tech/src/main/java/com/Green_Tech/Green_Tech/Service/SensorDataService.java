package com.Green_Tech.Green_Tech.Service;

import com.Green_Tech.Green_Tech.DTO.SensorDataDTO;
import com.Green_Tech.Green_Tech.Entity.SensorData;
import com.Green_Tech.Green_Tech.Repository.SensorDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SensorDataService {

    @Autowired
    private SensorDataRepository sensorDataRepository;

    public List<SensorDataDTO> getAllSensorData() {
        return sensorDataRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private SensorDataDTO convertToDTO(SensorData sensorData) {
        return new SensorDataDTO(
                sensorData.getTemperature(),
                sensorData.getHumidity(),
                sensorData.getSoilMoisture(),
                sensorData.getNitrogenLevel(),
                sensorData.getPhosphorusLevel(),
                sensorData.getPotassiumLevel()
        );
    }
}
