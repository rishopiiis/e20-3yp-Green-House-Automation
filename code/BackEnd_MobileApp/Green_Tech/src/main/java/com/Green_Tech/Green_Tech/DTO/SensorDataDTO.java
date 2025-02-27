package com.Green_Tech.Green_Tech.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class SensorDataDTO {
    private float temperature;

    public SensorDataDTO(float temperature, float humidity, float soilMoisture, float nitrogenLevel, float phosphorusLevel, float potassiumLevel) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.soilMoisture = soilMoisture;
        this.nitrogenLevel = nitrogenLevel;
        this.phosphorusLevel = phosphorusLevel;
        this.potassiumLevel = potassiumLevel;
    }

    public float getTemperature() {
        return temperature;
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }

    public float getHumidity() {
        return humidity;
    }

    public void setHumidity(float humidity) {
        this.humidity = humidity;
    }

    public float getSoilMoisture() {
        return soilMoisture;
    }

    public void setSoilMoisture(float soilMoisture) {
        this.soilMoisture = soilMoisture;
    }

    public float getNitrogenLevel() {
        return nitrogenLevel;
    }

    public void setNitrogenLevel(float nitrogenLevel) {
        this.nitrogenLevel = nitrogenLevel;
    }

    public float getPhosphorusLevel() {
        return phosphorusLevel;
    }

    public void setPhosphorusLevel(float phosphorusLevel) {
        this.phosphorusLevel = phosphorusLevel;
    }

    public float getPotassiumLevel() {
        return potassiumLevel;
    }

    public void setPotassiumLevel(float potassiumLevel) {
        this.potassiumLevel = potassiumLevel;
    }

    private float humidity;
    private float soilMoisture;
    private float nitrogenLevel;
    private float phosphorusLevel;
    private float potassiumLevel;
}
