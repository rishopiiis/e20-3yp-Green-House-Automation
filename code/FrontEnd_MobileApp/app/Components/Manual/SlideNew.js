import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const imageData = [
  {
    id: 1,
    image: require("./assets/s (5).jpg"),
    description:
      "The ESP32 is a low-cost, low-power system on a chip (SoC) that features Wi-Fi and Bluetooth capabilities. It is widely used in Internet of Things (IoT) projects and can connect sensors to the cloud or mobile apps. The ESP32 allows easy integration of various sensors and is perfect for wireless communication.",
  },
  {
    id: 2,
    image: require("./assets/s (6).jpg"),
    description:
      "The DHT22 (also known as AM2302) is a digital sensor used to measure temperature and humidity. It provides reliable data with a wide range of measurements (temperature: -40°C to 80°C, humidity: 0-100%). It is ideal for applications requiring environmental monitoring, like weather stations and HVAC systems.",
  },
  {
    id: 3,
    image: require("./assets/s (7).jpg"),
    description:
      "An LDR is a type of resistor that changes its resistance based on the amount of light falling on it. It is commonly used for detecting light levels and adjusting devices such as lights or alarms. A lower resistance indicates high light intensity, and a higher resistance indicates low light intensity.",
  },
  {
    id: 4,
    image: require("./assets/s (1).jpg"),
    description:
      "The VH400 is a soil moisture sensor designed to measure the water content in the soil. It provides real-time data about soil moisture levels and is widely used in agriculture and gardening applications to ensure optimal watering and irrigation systems.",
  },
  {
    id: 5,
    image: require("./assets/s (2).jpg"),
    description:
      "The MQ-135 is an air quality sensor that detects a range of harmful gases such as ammonia, nitrogen oxide, alcohol, benzene, and carbon dioxide. It is commonly used to monitor indoor air quality and detect pollution levels, making it ideal for air purifiers, home automation, and environmental monitoring applications.",
  },
  {
    id: 6,
    image: require("./assets/s (3).jpg"),
    description:
      "The YL-83 is another type of soil moisture sensor designed for monitoring soil water content. It works by measuring the resistance between two probes inserted into the soil. The higher the moisture content, the lower the resistance.",
  },
  {
    id: 7,
    image: require("./assets/s (4).jpg"),
    description:
      "The NPK sensor measures the nitrogen (N), phosphorus (P), and potassium (K) content in the soil, which are essential nutrients for plant growth. This sensor helps determine the fertility of the soil and provides crucial data for optimizing fertilizers and improving plant health.",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scaleAnim = new Animated.Value(1);

  const animatePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.85,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const goToNext = () => {
    if (currentIndex < imageData.length - 1) {
      animatePress();
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      animatePress();
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image Display */}
        <View style={styles.imageContainer}>
          <Image source={imageData[currentIndex].image} style={styles.image} />
        </View>

        <Text style={styles.description}>
          {imageData[currentIndex].description}
        </Text>

        {/* Navigation Controls */}
        <View style={styles.navigationContainer}>
          {/* Left Arrow */}
          <TouchableOpacity
            onPress={goToPrevious}
            style={[
              styles.arrowButton,
              currentIndex === 0 ? styles.disabledButton : styles.activeButton,
            ]}
            disabled={currentIndex === 0}
          >
            <Animated.Text style={styles.arrowText}>{"<"}</Animated.Text>
          </TouchableOpacity>

          {/* Page Number */}
          <View style={styles.pageNumberContainer}>
            <Text style={styles.pageText}>
              {currentIndex + 1} / {imageData.length}
            </Text>
          </View>

          {/* Right Arrow */}
          <TouchableOpacity
            onPress={goToNext}
            style={[
              styles.arrowButton,
              currentIndex === imageData.length - 1
                ? styles.disabledButton
                : styles.activeButton,
            ]}
            disabled={currentIndex === imageData.length - 1}
          >
            <Animated.Text style={styles.arrowText}>{">"}</Animated.Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(3,70,12)",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  imageContainer: {
    width: width * 0.8,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#f1f5f9",
    overflow: "hidden",
    borderWidth: 1.6,
    borderColor: "#ffb",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#f1f5f9",
    marginBottom: 20,
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  arrowButton: {
    padding: 18,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderWidth: 0.6,
    borderColor: "rgb(1,105,77)",
    height: 80,
  },
  activeButton: {
    backgroundColor: "rgb(1,105,77)",
  },
  disabledButton: {
    backgroundColor: "#64748b",
  },
  pageNumberContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "rgb(3,70,12)",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  pageText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  arrowText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
