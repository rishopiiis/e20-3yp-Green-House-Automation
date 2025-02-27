package com.Green_Tech.Green_Tech.Service;

import com.Green_Tech.Green_Tech.DTO.SensorDataDTO;
import com.Green_Tech.Green_Tech.Entity.SensorDatas;
import com.Green_Tech.Green_Tech.Repository.SensorDataRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SensorDataService {

    @Autowired
    private SensorDataRepository sensorDataRepository;

    public SensorDatas getAllSensorData() {
        return sensorDataRepository.findFirstByOrderByIdDesc();

    }
    public static HashMap convertByteArrayToHashMap(byte[] jsonData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(jsonData, HashMap.class);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
    public void getDataFromAWS(byte[] data){
        HashMap awsData = convertByteArrayToHashMap(data);
        System.out.println("temperature -->" + awsData.get("temperature"));
        SensorDatas sensorDatas = new SensorDatas((Double) awsData.get("temperature"), (Double) awsData.get("temperature"),
                (Double) awsData.get("temperature"));

        sensorDataRepository.save(sensorDatas);
    }






    private SensorDataDTO convertToDTO(SensorDatas sensorData) {
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
