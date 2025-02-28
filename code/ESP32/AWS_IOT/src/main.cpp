#include "Arduino.h"
#include "WiFi.h"
#include "ArduinoHttpClient.h"
#include "aws_setup.h"

#include "DHT.h"
#define DHTPIN 4    // Digital pin connected to the DHT sensor
#define DHTTYPE DHT22   // DHT 22  (AM2302)

// Capsitive moisture sensor
#define MOISTURE_SENSOR_PIN 34

// Define Control Pins
#define FAN_PIN 15
#define NUTRIENTS_PIN 16
#define WATER_PIN 17
#define LIGHT_PIN 2

float h;
float t;
DHT dht(DHTPIN, DHTTYPE);

void setup(){
  
    Serial.begin(115200);

    pinMode(FAN_PIN, OUTPUT);
    pinMode(NUTRIENTS_PIN, OUTPUT);
    pinMode(WATER_PIN, OUTPUT);
    pinMode(LIGHT_PIN, OUTPUT);

    connectAWS();
    dht.begin();

}

void loop(){

  client.loop();

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

    Serial.println(command);
    // control commands
    if (strcmp(command, "FAN_ON") == 0)
    {
      digitalWrite(FAN_PIN, HIGH);
      Serial.println("Fan turned ON");
    }
    else if (strcmp(command, "FAN_OFF") == 0)
    {
      digitalWrite(FAN_PIN, LOW);
      Serial.println("Fan turned OFF");
    }
    else if (strcmp(command, "NUTRIENTS_ON") == 0)
    {
      digitalWrite(NUTRIENTS_PIN, HIGH);
      Serial.println("Nutrients Pump turned ON");
    }
    else if (strcmp(command, "NUTRIENTS_OFF") == 0)
    {
      digitalWrite(NUTRIENTS_PIN, LOW);
      Serial.println("Nutrients Pump turned OFF");
    }
    else if (strcmp(command, "WATER_ON") == 0)
    {
      digitalWrite(WATER_PIN, HIGH);
      Serial.println("Water Pump turned ON");
    }
    else if (strcmp(command, "WATER_OFF") == 0)
    {
      digitalWrite(WATER_PIN, LOW);
      Serial.println("Water Pump turned OFF");
    }
    else if (strcmp(command, "LIGHT_ON") == 0)
    {
      digitalWrite(LIGHT_PIN, HIGH);
      Serial.println("Lights turned ON");
    }
    else if (strcmp(command, "LIGHT_OFF") == 0)
    {
      digitalWrite(LIGHT_PIN, LOW);
      Serial.println("Lights turned OFF");
    }
    else
    {
      Serial.println("Unknown command received");
    }
    publishMessage(h, t, moisture);
    client.loop();
    delay(2000);
}

// #include <ModbusMaster.h>

// #define MAX485_DE      5   // Control pin for RS485 (DE/RE)
// #define MAX485_RE_NEG  5
// #define RS485_RX       16  // ESP32 UART2 RX
// #define RS485_TX       17  // ESP32 UART2 TX

// HardwareSerial mySerial(2);  // Use UART2 for RS485 communication
// ModbusMaster node;

// void preTransmission() {
//     digitalWrite(MAX485_DE, HIGH);
//     digitalWrite(MAX485_RE_NEG, HIGH);
// }

// void postTransmission() {
//     digitalWrite(MAX485_DE, LOW);
//     digitalWrite(MAX485_RE_NEG, LOW);
// }

// void setup() {
//     Serial.begin(115200);
//     mySerial.begin(4800, SERIAL_8N1, RS485_RX, RS485_TX);

//     pinMode(MAX485_DE, OUTPUT);
//     pinMode(MAX485_RE_NEG, OUTPUT);

//     digitalWrite(MAX485_DE, LOW);
//     digitalWrite(MAX485_RE_NEG, LOW);

//     node.begin(1, mySerial);  // Sensor default Modbus address = 1
//     node.preTransmission(preTransmission);
//     node.postTransmission(postTransmission);
// }

// void loop() {
//     uint8_t result;
//     uint16_t data[3];

//     // Request 3 registers (Nitrogen, Phosphorus, Potassium)
//     result = node.readHoldingRegisters(0x1E, 3);
    
//     if (result == node.ku8MBSuccess) {
//         data[0] = node.getResponseBuffer(0);  // Nitrogen
//         data[1] = node.getResponseBuffer(1);  // Phosphorus
//         data[2] = node.getResponseBuffer(2);  // Potassium
        
//         Serial.print("Nitrogen: "); Serial.print(data[0]); Serial.println(" mg/kg");
//         Serial.print("Phosphorus: "); Serial.print(data[1]); Serial.println(" mg/kg");
//         Serial.print("Potassium: "); Serial.print(data[2]); Serial.println(" mg/kg");
//         Serial.println("----------------------------");
//     } else {
//         Serial.print("Modbus Error: "); Serial.println(result);
//     }

//     delay(2000);
// }
