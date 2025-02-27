package com.Green_Tech.Green_Tech.DTO;

public class SensorDataDTO {
    private Double temperature;
    private Double humidity;
    private Double soilMoisture;

    public SensorDataDTO(Double temperature, Double humidity, Double soilMoisture, float nitrogenLevel,
                         float phosphorusLevel, float potassiumLevel) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.soilMoisture = soilMoisture;
        this.nitrogenLevel = nitrogenLevel;
        this.phosphorusLevel = phosphorusLevel;
        this.potassiumLevel = potassiumLevel;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(float temperature) {
        this.temperature = (double) temperature;
    }

    public Double getHumidity() {
        return humidity;
    }

    public void setHumidity(float humidity) {
        this.humidity = (double) humidity;
    }

    public Double getSoilMoisture() {
        return soilMoisture;
    }

    public void setSoilMoisture(float soilMoisture) {
        this.soilMoisture = (double) soilMoisture;
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
    private float nitrogenLevel;
    private float phosphorusLevel;
    private float potassiumLevel;
}
