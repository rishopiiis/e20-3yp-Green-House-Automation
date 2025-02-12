import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

const Register:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const handleRegister = () => {
        if (password == '' || confirmPassword == "" || email == "") {
            alert("Fill the feilds");
            return;
        }

        if (password !== confirmPassword) {
            alert('Password and Confirm Password not match');
            return;
        }

        router.push("/Components/Authentication/login");
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.form}>
                <TextInput style={styles.inputs} placeholder='Email' placeholderTextColor="rgb(173, 173, 173)" value={email} onChangeText={(value) => setEmail(value)}/>
                <TextInput style={styles.inputs} placeholder='Password' placeholderTextColor="rgb(173, 173, 173)" value={password} onChangeText={(value) => setPassword(value)}/>
                <TextInput style={styles.inputs} placeholder='ConfirmPassword' placeholderTextColor="rgb(173, 173, 173)" value={confirmPassword} onChangeText={(value) => setConfirmPassword(value)}/>
                <Pressable onPress={handleRegister} style={styles.register}>
                    <Text style={styles.text}>REGISTER</Text>
                </Pressable>
            </View>
            <Text style={styles.already}>Already have an one?</Text>
            <Link href={"/Components/Authentication/login"} style={styles.login}>LOGIN</Link>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -40,
        backgroundColor: 'rgb(4, 38, 28)',
    },
    formContainer: {
        width: '80%',
        borderWidth: 2,
        borderColor: "rgb(21, 147, 101)",
        borderRadius: 10,
        padding: 10,
        backgroundColor:"rgb(1, 105, 77)",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        marginBottom: 20,
        color: 'rgb(232, 232, 232)',
    },
    form: {
    },
    inputs: {
        borderWidth: 1,
        borderColor: "rgba(4, 38, 28, 0.5)",
        borderRadius: 5,
        textAlign: "center",
        marginBottom: 12,
        padding: 10,
        width: "100%",
        color: "rgb(232, 232, 232)",
    },
    already: {
        marginTop: 20,
        textAlign: "center",
        marginBottom: 10,
        color: "#F6FCDF",
    },
    login: {
        color: "#F6FCDF",
        textAlign: "center",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#1A1A19",
        borderRadius: 5,
    },
    register: {
        padding: 10,
        backgroundColor: "#F6FCDF",
        borderRadius: 5,
    },
    text: {
        fontWeight: "bold",
        textAlign: "center"
    }

}) 

export default Register