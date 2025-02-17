import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GrowDataItem {
  name: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const GrowData: React.FC = () => {
  const growDataItems: GrowDataItem[] = [
    { name: 'Temp', value: '82.4°F', icon: 'thermometer' },
    { name: 'Humidity', value: '43%', icon: 'water' },
    { name: 'Soil Moisture', value: '57.4°F', icon: 'leaf' },
    { name: 'N Level', value: '24 ppm', icon: 'flask' },
    { name: 'P Level', value: '30 ppm', icon: 'flask' },
    { name: 'K Level', value: '20 ppm', icon: 'flask' },
  ];

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


