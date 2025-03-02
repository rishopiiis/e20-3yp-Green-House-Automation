import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

// Define DataType interface
type DataType = {
  id: number;
  humidity: number;
  soilMoisture: number;
  temp: number;
  nitrogenLevel: number;
  phosphorusLevel: number;
  potassiumLevel: number;
  updatedAt: string;
};

// Define data types for the chart
const dataTypes = [
  { key: "temp", name: "Temperature" },
  { key: "humidity", name: "Humidity" },
  { key: "soilMoisture", name: "Soil Moisture" },
  { key: "nitrogenLevel", name: "Nitrogen Level" },
  { key: "phosphorusLevel", name: "Phosphorus Level" },
  { key: "potassiumLevel", name: "Potassium Level" },
];

const StatisticsDisplay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState({ avg: 0, min: 0, max: 0, trend: 0 });

  // Mock Data
  const [datas, setDatas] = useState<DataType[]>([
    {
      id: 1,
      humidity: 49.61,
      soilMoisture: 49.04,
      temp: 29.94,
      nitrogenLevel: 8.95,
      phosphorusLevel: 6.53,
      potassiumLevel: 1.43,
      updatedAt: "2/9/2025",
    },
    {
      id: 2,
      humidity: 91.88,
      soilMoisture: 11.33,
      temp: 21.64,
      nitrogenLevel: 7.86,
      phosphorusLevel: 4.54,
      potassiumLevel: 6.42,
      updatedAt: "2/12/2025",
    },
    {
      id: 3,
      humidity: 70.26,
      soilMoisture: 91.62,
      temp: 26.08,
      nitrogenLevel: 7.78,
      phosphorusLevel: 4.52,
      potassiumLevel: 8.49,
      updatedAt: "2/27/2025",
    },
    {
      id: 4,
      humidity: 46.37,
      soilMoisture: 53.24,
      temp: 21.24,
      nitrogenLevel: 9.68,
      phosphorusLevel: 7.53,
      potassiumLevel: 5.04,
      updatedAt: "2/19/2025",
    },
    {
      id: 5,
      humidity: 45.8,
      soilMoisture: 16.18,
      temp: 23.25,
      nitrogenLevel: 1.4,
      phosphorusLevel: 7.66,
      potassiumLevel: 2.26,
      updatedAt: "2/22/2025",
    },
    {
      id: 6,
      humidity: 83.86,
      soilMoisture: 86.51,
      temp: 24.82,
      nitrogenLevel: 3.62,
      phosphorusLevel: 2.16,
      potassiumLevel: 1.95,
      updatedAt: "2/16/2025",
    },
    {
      id: 7,
      humidity: 21.36,
      soilMoisture: 86.59,
      temp: 26.91,
      nitrogenLevel: 8.3,
      phosphorusLevel: 1.75,
      potassiumLevel: 2.86,
      updatedAt: "2/5/2025",
    },
    {
      id: 8,
      humidity: 32.55,
      soilMoisture: 30.59,
      temp: 23.68,
      nitrogenLevel: 7.65,
      phosphorusLevel: 9.21,
      potassiumLevel: 3.17,
      updatedAt: "2/23/2025",
    },
    {
      id: 9,
      humidity: 70.85,
      soilMoisture: 93.75,
      temp: 29.14,
      nitrogenLevel: 8.02,
      phosphorusLevel: 6.63,
      potassiumLevel: 8.76,
      updatedAt: "2/17/2025",
    },
    {
      id: 10,
      humidity: 28.99,
      soilMoisture: 48.96,
      temp: 28.98,
      nitrogenLevel: 4.05,
      phosphorusLevel: 8.9,
      potassiumLevel: 3.85,
      updatedAt: "2/5/2025",
    },
    {
      id: 11,
      humidity: 54.62,
      soilMoisture: 33.62,
      temp: 28.25,
      nitrogenLevel: 1.84,
      phosphorusLevel: 2.35,
      potassiumLevel: 4.52,
      updatedAt: "2/19/2025",
    },
    {
      id: 12,
      humidity: 22.78,
      soilMoisture: 60.59,
      temp: 22.15,
      nitrogenLevel: 4.4,
      phosphorusLevel: 3.21,
      potassiumLevel: 4.17,
      updatedAt: "2/15/2025",
    },
    {
      id: 13,
      humidity: 41.94,
      soilMoisture: 57.47,
      temp: 22.34,
      nitrogenLevel: 1.88,
      phosphorusLevel: 6.86,
      potassiumLevel: 4.1,
      updatedAt: "2/22/2025",
    },
    {
      id: 14,
      humidity: 22.3,
      soilMoisture: 77.05,
      temp: 23.78,
      nitrogenLevel: 6.9,
      phosphorusLevel: 6.93,
      potassiumLevel: 2.31,
      updatedAt: "2/22/2025",
    },
    {
      id: 15,
      humidity: 86.53,
      soilMoisture: 74.15,
      temp: 25.19,
      nitrogenLevel: 5.0,
      phosphorusLevel: 5.81,
      potassiumLevel: 1.56,
      updatedAt: "2/28/2025",
    },
    {
      id: 16,
      humidity: 83.3,
      soilMoisture: 52.74,
      temp: 25.85,
      nitrogenLevel: 5.5,
      phosphorusLevel: 2.84,
      potassiumLevel: 1.75,
      updatedAt: "2/3/2025",
    },
    {
      id: 17,
      humidity: 28.66,
      soilMoisture: 81.59,
      temp: 26.26,
      nitrogenLevel: 4.98,
      phosphorusLevel: 5.46,
      potassiumLevel: 2.2,
      updatedAt: "2/23/2025",
    },
    {
      id: 18,
      humidity: 47.29,
      soilMoisture: 93.52,
      temp: 28.87,
      nitrogenLevel: 3.61,
      phosphorusLevel: 1.65,
      potassiumLevel: 2.01,
      updatedAt: "2/14/2025",
    },
    {
      id: 19,
      humidity: 48.6,
      soilMoisture: 56.55,
      temp: 29.79,
      nitrogenLevel: 6.96,
      phosphorusLevel: 4.18,
      potassiumLevel: 9.15,
      updatedAt: "2/15/2025",
    },
    {
      id: 20,
      humidity: 38.7,
      soilMoisture: 45.78,
      temp: 22.84,
      nitrogenLevel: 4.22,
      phosphorusLevel: 5.0,
      potassiumLevel: 7.85,
      updatedAt: "2/25/2025",
    },
    {
      id: 21,
      humidity: 46.58,
      soilMoisture: 99.5,
      temp: 28.38,
      nitrogenLevel: 6.32,
      phosphorusLevel: 6.08,
      potassiumLevel: 6.94,
      updatedAt: "2/11/2025",
    },
    {
      id: 22,
      humidity: 82.43,
      soilMoisture: 85.25,
      temp: 28.02,
      nitrogenLevel: 8.27,
      phosphorusLevel: 5.06,
      potassiumLevel: 2.31,
      updatedAt: "2/4/2025",
    },
    {
      id: 23,
      humidity: 79.48,
      soilMoisture: 71.99,
      temp: 21.94,
      nitrogenLevel: 6.1,
      phosphorusLevel: 6.37,
      potassiumLevel: 2.38,
      updatedAt: "2/3/2025",
    },
    {
      id: 24,
      humidity: 84.87,
      soilMoisture: 49.77,
      temp: 25.85,
      nitrogenLevel: 7.03,
      phosphorusLevel: 5.1,
      potassiumLevel: 4.97,
      updatedAt: "2/15/2025",
    },
    // {
    //   id: 25,
    //   humidity: 35.56,
    //   soilMoisture: 56.29,
    //   temp: 20.54,
    //   nitrogenLevel: 3.69,
    //   phosphorusLevel: 7.0,
    //   potassiumLevel: 1.44,
    //   updatedAt: "2/10/2025",
    // },
    // {
    //   id: 26,
    //   humidity: 64.96,
    //   soilMoisture: 81.48,
    //   temp: 20.44,
    //   nitrogenLevel: 1.58,
    //   phosphorusLevel: 3.12,
    //   potassiumLevel: 8.88,
    //   updatedAt: "2/27/2025",
    // },
    // {
    //   id: 27,
    //   humidity: 69.52,
    //   soilMoisture: 39.26,
    //   temp: 29.5,
    //   nitrogenLevel: 1.68,
    //   phosphorusLevel: 9.41,
    //   potassiumLevel: 6.82,
    //   updatedAt: "2/23/2025",
    // },
    // {
    //   id: 28,
    //   humidity: 77.98,
    //   soilMoisture: 25.12,
    //   temp: 28.92,
    //   nitrogenLevel: 9.91,
    //   phosphorusLevel: 3.44,
    //   potassiumLevel: 8.93,
    //   updatedAt: "2/13/2025",
    // },
    // {
    //   id: 29,
    //   humidity: 74.29,
    //   soilMoisture: 68.19,
    //   temp: 25.47,
    //   nitrogenLevel: 2.22,
    //   phosphorusLevel: 4.92,
    //   potassiumLevel: 3.35,
    //   updatedAt: "2/2/2025",
    // },
    // {
    //   id: 30,
    //   humidity: 90.79,
    //   soilMoisture: 72.86,
    //   temp: 22.79,
    //   nitrogenLevel: 7.31,
    //   phosphorusLevel: 9.02,
    //   potassiumLevel: 4.2,
    //   updatedAt: "2/5/2025",
    // },
    // {
    //   id: 31,
    //   humidity: 77.79,
    //   soilMoisture: 19.47,
    //   temp: 27.12,
    //   nitrogenLevel: 5.85,
    //   phosphorusLevel: 4.2,
    //   potassiumLevel: 8.83,
    //   updatedAt: "2/26/2025",
    // },
    // {
    //   id: 32,
    //   humidity: 63.08,
    //   soilMoisture: 35.14,
    //   temp: 28.65,
    //   nitrogenLevel: 6.46,
    //   phosphorusLevel: 5.94,
    //   potassiumLevel: 5.13,
    //   updatedAt: "2/16/2025",
    // },
    // {
    //   id: 33,
    //   humidity: 57.43,
    //   soilMoisture: 50.85,
    //   temp: 20.98,
    //   nitrogenLevel: 4.38,
    //   phosphorusLevel: 1.19,
    //   potassiumLevel: 2.48,
    //   updatedAt: "2/18/2025",
    // },
    // {
    //   id: 34,
    //   humidity: 35.99,
    //   soilMoisture: 31.56,
    //   temp: 20.19,
    //   nitrogenLevel: 1.55,
    //   phosphorusLevel: 6.01,
    //   potassiumLevel: 1.69,
    //   updatedAt: "2/9/2025",
    // },
    // {
    //   id: 35,
    //   humidity: 50.84,
    //   soilMoisture: 87.06,
    //   temp: 28.36,
    //   nitrogenLevel: 8.75,
    //   phosphorusLevel: 2.16,
    //   potassiumLevel: 3.78,
    //   updatedAt: "2/5/2025",
    // },
    // {
    //   id: 36,
    //   humidity: 24.07,
    //   soilMoisture: 88.29,
    //   temp: 24.83,
    //   nitrogenLevel: 9.6,
    //   phosphorusLevel: 5.82,
    //   potassiumLevel: 1.64,
    //   updatedAt: "2/9/2025",
    // },
    // {
    //   id: 37,
    //   humidity: 76.44,
    //   soilMoisture: 29.44,
    //   temp: 27.41,
    //   nitrogenLevel: 4.1,
    //   phosphorusLevel: 3.97,
    //   potassiumLevel: 1.66,
    //   updatedAt: "2/14/2025",
    // },
    // {
    //   id: 38,
    //   humidity: 67.92,
    //   soilMoisture: 51.39,
    //   temp: 23.87,
    //   nitrogenLevel: 8.34,
    //   phosphorusLevel: 3.81,
    //   potassiumLevel: 2.84,
    //   updatedAt: "2/23/2025",
    // },
    // {
    //   id: 39,
    //   humidity: 32.21,
    //   soilMoisture: 61.7,
    //   temp: 20.03,
    //   nitrogenLevel: 7.5,
    //   phosphorusLevel: 5.53,
    //   potassiumLevel: 9.35,
    //   updatedAt: "2/13/2025",
    // },
    // {
    //   id: 40,
    //   humidity: 39.79,
    //   soilMoisture: 45.77,
    //   temp: 21.52,
    //   nitrogenLevel: 3.45,
    //   phosphorusLevel: 1.49,
    //   potassiumLevel: 7.33,
    //   updatedAt: "2/20/2025",
    // },
    // {
    //   id: 41,
    //   humidity: 55.68,
    //   soilMoisture: 84.42,
    //   temp: 29.61,
    //   nitrogenLevel: 4.0,
    //   phosphorusLevel: 6.31,
    //   potassiumLevel: 9.85,
    //   updatedAt: "2/22/2025",
    // },
    // {
    //   id: 42,
    //   humidity: 30.77,
    //   soilMoisture: 17.61,
    //   temp: 26.04,
    //   nitrogenLevel: 8.05,
    //   phosphorusLevel: 7.79,
    //   potassiumLevel: 3.72,
    //   updatedAt: "2/11/2025",
    // },
    // {
    //   id: 43,
    //   humidity: 87.76,
    //   soilMoisture: 61.92,
    //   temp: 21.86,
    //   nitrogenLevel: 4.79,
    //   phosphorusLevel: 6.44,
    //   potassiumLevel: 3.51,
    //   updatedAt: "2/5/2025",
    // },
    // {
    //   id: 44,
    //   humidity: 48.36,
    //   soilMoisture: 42.68,
    //   temp: 29.25,
    //   nitrogenLevel: 6.32,
    //   phosphorusLevel: 5.89,
    //   potassiumLevel: 3.03,
    //   updatedAt: "2/6/2025",
    // },
    // {
    //   id: 45,
    //   humidity: 60.72,
    //   soilMoisture: 91.91,
    //   temp: 21.94,
    //   nitrogenLevel: 1.49,
    //   phosphorusLevel: 7.43,
    //   potassiumLevel: 8.69,
    //   updatedAt: "2/3/2025",
    // },
    // {
    //   id: 46,
    //   humidity: 64.34,
    //   soilMoisture: 52.23,
    //   temp: 29.01,
    //   nitrogenLevel: 6.73,
    //   phosphorusLevel: 2.44,
    //   potassiumLevel: 5.72,
    //   updatedAt: "2/10/2025",
    // },
    // {
    //   id: 47,
    //   humidity: 83.69,
    //   soilMoisture: 81.95,
    //   temp: 25.02,
    //   nitrogenLevel: 8.02,
    //   phosphorusLevel: 4.62,
    //   potassiumLevel: 2.79,
    //   updatedAt: "2/23/2025",
    // },
    // {
    //   id: 48,
    //   humidity: 77.48,
    //   soilMoisture: 79.46,
    //   temp: 24.18,
    //   nitrogenLevel: 7.77,
    //   phosphorusLevel: 2.96,
    //   potassiumLevel: 6.53,
    //   updatedAt: "2/21/2025",
    // },
    // {
    //   id: 49,
    //   humidity: 36.62,
    //   soilMoisture: 72.21,
    //   temp: 27.89,
    //   nitrogenLevel: 4.53,
    //   phosphorusLevel: 6.81,
    //   potassiumLevel: 5.88,
    //   updatedAt: "2/26/2025",
    // },
    {
      id: 50,
      humidity: 29.34,
      soilMoisture: 58.95,
      temp: 25.77,
      nitrogenLevel: 3.52,
      phosphorusLevel: 6.76,
      potassiumLevel: 7.13,
      updatedAt: "2/22/2025",
    },
    ]);

  useEffect(() => {
    analyzeData(datas, dataTypes[currentIndex].key);
  }, [currentIndex, datas]);

  const analyzeData = (data: DataType[], type: keyof DataType) => {
    if (data.length === 0) return;

    const values = data.map((item) => item[type] as number);
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const trend = values[values.length - 1] - values[0];
    setStats({ avg, min, max, trend });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dataTypes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dataTypes.length) % dataTypes.length);
  };

  const getContainerStyle = (currentIndex) => {
    const colors = [
      "rgb(1, 105, 77)", // Default color
      "rgb(255, 99, 132)", // Temperature
      "rgb(54, 162, 235)", // Humidity
      "rgb(75, 192, 192)", // Soil Moisture
      "rgb(153, 102, 255)", // Nitrogen Level
      "rgb(255, 159, 64)", // Phosphorus Level
      "rgb(255, 205, 86)", // Potassium Level
    ];

    return {
      padding: 20,
      backgroundColor: colors[currentIndex] || colors[0], // Fallback to default color
      borderRadius: 8,
      width: "90%",
      marginVertical: 10,
      textAlign: "center",
      shadowColor: "#004",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    };
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live Data Statistics</Text>

      {/* Switch Data Type Buttons */}
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.currentDataTypeText}>
          {dataTypes[currentIndex].name}
        </Text>

        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Statistical Summary */}
      <View style={getContainerStyle(currentIndex)}>
        <Text style={styles.label}>📊 Average: {stats.avg.toFixed(2)}</Text>
        <Text style={styles.label}>🔺 Max: {stats.max}</Text>
        <Text style={styles.label}>🔻 Min: {stats.min}</Text>
        <Text style={styles.label}>
          📈 Trend: {stats.trend > 0 ? "Increasing" : "Decreasing"}
        </Text>
      </View>

      {/* Line Chart */}
      <LineChart
        data={{
          labels: datas.map((_, i) => (i + 1).toString()), // X-axis labels
          datasets: [
            {
              data: datas.map(
                (item) => (item[dataTypes[currentIndex].key] as number) || 0
              ),
            },
          ],
        }}
        width={410} 
        height={300}
        chartConfig={chartConfig("#e8e8e8")}
        style={styles.chart}
      />
    </ScrollView>
  );
};

// Chart configuration
const chartConfig = (color: string) => ({
  backgroundGradientFrom: "rgb(1, 105, 77)",
  backgroundGradientTo: "rgb(1, 105, 77)",
  width:"100%",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: () => "#fff",
});

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgb(4, 38, 28)",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgb(232, 232, 232)",
    marginBottom: 30,
  },
  chart: {
    marginTop:20,
    marginBottom: 20,
    marginVertical: 20,
    marginHorizontal: 50,
    borderRadius: 8,
    width: "90%",
    height: 300,
  },
  label: {
    fontSize: 20,
    color: "#D1D5DB",
    fontWeight: "600",
    marginVertical: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%",
  },
  arrowButton: {
    padding: 12,
    backgroundColor: "rgb(1, 105, 77)",
    borderRadius: 10,
  },
  currentDataTypeText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
});

export default StatisticsDisplay;