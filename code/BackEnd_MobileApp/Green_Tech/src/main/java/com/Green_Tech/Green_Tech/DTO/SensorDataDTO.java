package com.Green_Tech.Green_Tech.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SensorDataDTO {
    private float temperature;
    private float humidity;
    private float soilMoisture;
    private float nitrogenLevel;
    private float phosphorusLevel;
    private float potassiumLevel;
}
