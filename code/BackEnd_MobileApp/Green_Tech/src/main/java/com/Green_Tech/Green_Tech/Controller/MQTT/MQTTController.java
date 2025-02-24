package com.Green_Tech.Green_Tech.Controller.MQTT;

import com.Green_Tech.Green_Tech.Service.MQTT.MQTTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/mqtt")
public class MQTTController {

    @Autowired
    private MQTTService mqttService;

    @RequestMapping("/connect")
    public String connectMQTT() {
        return "Initial connection to MQTT server!!!";
    }

}
