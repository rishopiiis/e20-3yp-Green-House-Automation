import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

interface GrowDataItem {
  name: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const GrowData: React.FC = () => {
  const [growDataItems, setGrowDataItems] = useState<GrowDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/sensors') // Adjust if hosted externally
      .then(response => {
        const sensorData = response.data[0]; // Assuming only one row of sensor data
        const formattedData: GrowDataItem[] = [
          { name: 'Temp', value: `${sensorData.temperature}°C`, icon: 'thermometer' },
          { name: 'Humidity', value: `${sensorData.humidity}%`, icon: 'water' },
          { name: 'Soil Moisture', value: `${sensorData.soilMoisture}%`, icon: 'leaf' },
          { name: 'N Level', value: `${sensorData.nitrogenLevel} ppm`, icon: 'flask' },
          { name: 'P Level', value: `${sensorData.phosphorusLevel} ppm`, icon: 'flask' },
          { name: 'K Level', value: `${sensorData.potassiumLevel} ppm`, icon: 'flask' },
        ];
        setGrowDataItems(formattedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching sensor data:', err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#16F08B" />;
  }

  if (error) {
    return <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>;
  }

  const firstRow = growDataItems.slice(0, 3);
  const secondRow = growDataItems.slice(3, 6);

  return (
    <View style={styles.growDataSection}>
      <Text style={styles.growDataMainTitle}>GROW DATA</Text>

      <View style={styles.rowContainer}>
        {firstRow.map((item, index) => (
          <View key={index} style={styles.growDataItem}>
            <Text style={styles.growDataTitle}>{item.name}</Text>
            <View style={styles.largeCircle}>
              <Ionicons name={item.icon} size={28} color="#16F08B" />
              <Text style={styles.circleValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.rowContainer}>
        {secondRow.map((item, index) => (
          <View key={index} style={styles.growDataItem}>
            <Text style={styles.growDataTitle}>{item.name}</Text>
            <View style={styles.largeCircle}>
              <Ionicons name={item.icon} size={28} color="#16F08B" />
              <Text style={styles.circleValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  growDataSection: {
    backgroundColor: '#01694D',
    padding: 15,
    borderRadius: 20,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  growDataMainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
    marginBottom: 15,
  },
  growDataItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
  },
  growDataTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16F08B',
    marginBottom: 5,
  },
  largeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#04261C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  circleValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16F08B',
    marginTop: 5,
  },
});

export default GrowData;


