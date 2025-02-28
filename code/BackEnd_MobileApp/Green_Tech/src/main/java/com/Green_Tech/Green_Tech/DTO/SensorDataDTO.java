package com.Green_Tech.Green_Tech.DTO;

public class SensorDataDTO {
    private Double temperature;
    private Double humidity;
    private Double soilMoisture;
    private Double nitrogenLevel;
    private Double phosphorusLevel;
    private Double potassiumLevel;

    public SensorDataDTO(Double temperature, Double humidity, Double soilMoisture, Double nitrogenLevel,
                         Double phosphorusLevel, Double potassiumLevel) {
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

    public Double getNitrogenLevel() {
        return nitrogenLevel;
    }

    public void setNitrogenLevel(float nitrogenLevel) {
        this.nitrogenLevel = (double) nitrogenLevel;
    }

    public Double getPhosphorusLevel() {
        return phosphorusLevel;
    }

    public void setPhosphorusLevel(float phosphorusLevel) {
        this.phosphorusLevel = (double) phosphorusLevel;
    }

    public Double getPotassiumLevel() {
        return potassiumLevel;
    }

    public void setPotassiumLevel(float potassiumLevel) {
        this.potassiumLevel = (double) potassiumLevel;
    }

}
