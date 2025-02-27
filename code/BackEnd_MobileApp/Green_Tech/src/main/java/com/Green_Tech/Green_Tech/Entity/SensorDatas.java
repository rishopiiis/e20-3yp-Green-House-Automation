package com.Green_Tech.Green_Tech.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "sensor_data")
public class SensorDatas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double temperature;
    private Double humidity;
    private Double soilMoisture;
    private float nitrogenLevel;
    private float phosphorusLevel;
    private float potassiumLevel;

    public SensorDatas(Double temperature, Double humidity, Double soilMoisture) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.soilMoisture = soilMoisture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
