#include "Arduino.h"
#include "WiFi.h"
#include "ArduinoHttpClient.h"
#include "aws_setup.h"

#include "DHT.h"
#define DHTPIN 4    // Digital pin connected to the DHT sensor
#define DHTTYPE DHT22   // DHT 22  (AM2302)

// Capsitive moisture sensor
#define MOISTURE_SENSOR_PIN 34

float h;
float t;

DHT dht(DHTPIN, DHTTYPE);

void setup(){
  
    Serial.begin(115200);
    connectAWS();
    dht.begin();

}

void loop(){

    h = dht.readHumidity();
    t = dht.readTemperature();

    if (isnan(h) || isnan(t)) // Check if any reads failed and exit early (to try again).
    {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
    }

    int moisture = analogRead(MOISTURE_SENSOR_PIN);

    Serial.print(F("Humidity: "));
    Serial.print(h);
    Serial.print(F("%  Temperature: "));
    Serial.print(t);
    Serial.println(F("°C "));

    Serial.print(F("Moisture: "));
    Serial.print(moisture);
    Serial.println(F("%"));

    if (moisture < 1000)
    {
      Serial.println("Watering the plant");
    }
    else
    {
      Serial.println("Plant is watered");
    }

    publishMessage(h, t, moisture);
    client.loop();
    delay(2000);
}