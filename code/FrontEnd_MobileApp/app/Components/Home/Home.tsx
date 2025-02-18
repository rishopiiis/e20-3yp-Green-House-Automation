import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Modal, 
  FlatList 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const Home = () => {

  const zones = ["ZONE 1", "ZONE 2", "ZONE 3", "ZONE 4", "ZONE 5", "ZONE 6"];

  return (
    <>
    <View style={styles.container}>

      <Header viewZone={false} selectedZone={''} setSelectedZone={() => {}}/>

      <Image source={require("../../../assets/download.jpeg")} style={styles.image} />

      <ScrollView style={styles.optionsContainer}>
          {zones.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton} onPress={() => router.push("/Components/zone/Zone")}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>

      <Footer />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(4,38,28)",
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 10,
    marginTop: "25%",
    marginBottom: 15,
  },
  optionsContainer: {
    width: "90%",
    backgroundColor: "#01694D",
    padding: 15,
    borderRadius: 10,
    marginBottom: "20%",
  },
  optionButton: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#04261C",
    borderRadius: 10,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
