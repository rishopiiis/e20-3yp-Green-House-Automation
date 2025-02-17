import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const StatisticsDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (Array.isArray(result)) {
          setData(result.reverse()); // Ensure newest data is last for chart
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Fetching Data...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live Sensor Stats</Text>

      {/* Temperature Chart */}
      <LineChart
        data={{
          labels: data.map((_, i) => i.toString()), // X-axis labels
          datasets: [{ data: data.map((item) => item.temperature || 0) }], // Default to 0 if missing
        }}
        width={300}
        height={220}
        chartConfig={chartConfig("#4CAF50")}
        style={styles.chart}
      />

      {/* Humidity Chart */}
      <LineChart
        data={{
          labels: data.map((_, i) => i.toString()),
          datasets: [{ data: data.map((item) => item.humidity || 0) }],
        }}
        width={300}
        height={220}
        chartConfig={chartConfig("#1E90FF")}
        style={styles.chart}
      />

      {/* Nutrition Data */}
      <View style={styles.card}>
        <Text style={styles.label}>🌱 Nutrition Levels</Text>
        <Text style={styles.value}>N: {data[0]?.nutrition?.N || 0}</Text>
        <Text style={styles.value}>P: {data[0]?.nutrition?.P || 0}</Text>
        <Text style={styles.value}>K: {data[0]?.nutrition?.K || 0}</Text>
      </View>
    </ScrollView>
  );
};

const chartConfig = (color) => ({
  backgroundColor: "#000",
  backgroundGradientFrom: "#1E1E1E",
  backgroundGradientTo: "#121212",
  decimalPlaces: 2,
  color: (opacity = 1) => `${color}${Math.floor(opacity * 255).toString(16)}`,
  labelColor: () => "#fff",
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 15,
  },
  chart: { marginVertical: 10, borderRadius: 8 },
  card: {
    padding: 15,
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    width: "90%",
    marginVertical: 5,
  },
  label: {
    fontSize: 18,
    color: "#D1D5DB",
    fontWeight: "600",
    textAlign: "center",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  loadingText: { color: "#ffffff", marginTop: 10 },
});

export default StatisticsDisplay;
