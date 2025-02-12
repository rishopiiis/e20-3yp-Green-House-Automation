import axios from "axios";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {StyleSheet, Text, View } from "react-native";

const Page:React.FC = () => {
  const [data, setData] = useState<any>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(()=>{
    setTimeout(() => {
      if(!isLogin){
        router.push("/Components/Authentication/login");
      }
    }, 2000);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Green Tech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: 'rgb(4, 38, 28)',
  },
  title: {
    fontSize: 58,
    fontWeight: "bold",
    color: 'rgb(232, 232, 232)',
  }
});

export default Page;