import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return <>
        <Text>SignupScreen</Text>
        <Button title="Signin" onPress={() => navigation.navigate('Signin')} />
        <Button title="mainFlow" onPress={() => navigation.navigate('mainFlow')} />

    </>
}

const styles = StyleSheet.create({})

export default SignupScreen