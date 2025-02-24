package com.Green_Tech.Green_Tech.Service.MQTT;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Service;

import software.amazon.awssdk.crt.mqtt.MqttClientConnection;
import software.amazon.awssdk.crt.mqtt.MqttMessage;
import software.amazon.awssdk.crt.mqtt.QualityOfService;
import software.amazon.awssdk.iot.AwsIotMqttConnectionBuilder;

import java.nio.charset.StandardCharsets;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CountDownLatch;

@Service
public class MQTTService {

    private MqttClientConnection connection;

    @PostConstruct
    public void init() {
            try {
                // Initialize and configure MQTT connection here
                AwsIotMqttConnectionBuilder builder = AwsIotMqttConnectionBuilder.newMtlsBuilderFromPath(
                                "D:/Study/Engineering/3YP/ESP32/AWS_Certs/device_certificate.crt",
                                "D:/Study/Engineering/3YP/ESP32/AWS_Certs/private_key.key")
                        .withClientId("ESP32_DHT22")
                        .withEndpoint("a1j1bemwj6e7rr-ats.iot.ap-south-1.amazonaws.com");

                connection = builder.build();
                CompletableFuture<Boolean> connected = connection.connect();
                connected.get();

                // Subscribe to the sensor data topic
                CompletableFuture<Integer> subscribed = connection.subscribe("ESP32/PUB", QualityOfService.AT_LEAST_ONCE, this::handleMessage);
                subscribed.whenComplete((result, throwable) -> {
                    if (throwable != null) {
                        System.err.println("Failed to subscribe: " + throwable.getMessage());
                    } else {
                        System.out.println("Successfully subscribed to ESP32/PUB");
                    }
                });

                // Publish to the topic
                int count = 0;
                while (count++ < 10) {
                    String payload = "Sensor data #" + count; // Replace this with actual sensor data
                    CompletableFuture<Integer> published = connection.publish(new MqttMessage("ESP32/PUB", payload.getBytes(StandardCharsets.UTF_8), QualityOfService.AT_LEAST_ONCE, false));
                    published.get();
                    Thread.sleep(1000);
                }

                // Wait for messages to be received
                // (Keep this if you want to wait for the specified count of messages)
                // countDownLatch.await();

                // Disconnect
                CompletableFuture<Void> disconnected = connection.disconnect();
                disconnected.get();

                // Close the connection now that we are completely done with it.
                connection.close();
            } catch (Exception e) {
                System.err.println("Failed to initialize MQTT connection: " + e.getMessage());
            }
    }

    private void handleMessage(MqttMessage message) {
        System.out.println(message);
        String payload = new String(message.getPayload(), StandardCharsets.UTF_8);
        System.out.println("Received sensor data: " + payload);
        // Process the sensor data as needed
    }

    @PreDestroy
    public void cleanup() {
        if (connection != null) {
            CompletableFuture<Void> disconnected = connection.disconnect();
            disconnected.join(); // Wait for disconnect to complete
            connection.close();
        }
    }
}

