// export default StatisticsDisplay;
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_24hr_vol=true";

const StatisticsDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({}); // Store statistical analysis

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.bitcoin) {
          const priceData = [
            {
              value: result.bitcoin.usd,
              timestamp: new Date(),
            },
          ];
          setData(priceData); // Store the current price data
          analyzeData(priceData); // Perform statistical analysis
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

  // Function to calculate statistical insights
  const analyzeData = (data) => {
    if (data.length === 0) return;

    const values = data.map((item) => item.value || 0);
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const trend = values[values.length - 1] - values[0]; // Last - First Value

    setStats({ avg, min, max, trend });
  };

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
      <Text style={styles.title}>Live Data Statistics</Text>

      {/* Statistical Summary */}
      <View style={styles.card}>
        <Text style={styles.label}>📊 Average: {stats.avg.toFixed(2)}</Text>
        <Text style={styles.label}>🔺 Max: {stats.max.toFixed(2)}</Text>
        <Text style={styles.label}>🔻 Min: {stats.min.toFixed(2)}</Text>
        <Text style={styles.label}>
          📈 Trend: {stats.trend > 0 ? "Increasing" : "Decreasing"}
        </Text>
      </View>

      {/* Data Chart */}
      <LineChart
        data={{
          labels: data.map((_, i) => i.toString()), // X-axis labels
          datasets: [{ data: data.map((item) => item.value || 0) }], // Y-axis values
        }}
        width={300}
        height={220}
        chartConfig={chartConfig("#4CAF50")}
        style={styles.chart}
      />
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
  loadingText: { color: "#ffffff", marginTop: 10 },
});

export default StatisticsDisplay;
