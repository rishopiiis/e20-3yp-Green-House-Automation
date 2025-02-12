import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'

const About:React.FC = () => {
  const [data, setData] = useState('')

  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Text>{data}</Text>
      <Link href={"/"}>go back to home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default About