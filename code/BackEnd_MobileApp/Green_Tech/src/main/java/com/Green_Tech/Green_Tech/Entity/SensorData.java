package com.Green_Tech.Green_Tech.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Entity
public class SensorData {
    public SensorData(Long id, float temperature, float humidity, float soilMoisture, float nitrogenLevel, float phosphorusLevel, float potassiumLevel, Date updatedAt) {
        this.id = id;
        this.temperature = temperature;
        this.humidity = humidity;
        this.soilMoisture = soilMoisture;
        this.nitrogenLevel = nitrogenLevel;
        this.phosphorusLevel = phosphorusLevel;
        this.potassiumLevel = potassiumLevel;
        this.updatedAt = updatedAt;
    }

    public SensorData(Long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private float temperature;
    private float humidity;
    private float soilMoisture;
    private float nitrogenLevel;
    private float phosphorusLevel;
    private float potassiumLevel;
    private Date updatedAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
