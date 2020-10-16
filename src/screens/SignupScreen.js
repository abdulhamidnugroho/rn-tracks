import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.container}>
                <Spacer>
                    <Text h3>Sign Up for Tracker App</Text>
                </Spacer>
                <Input 
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                />
                <Spacer />
                <Input 
                    label="Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    secureTextEntry 
                />
                <Spacer>
                    <Button title="Sign Up" />
                </Spacer>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
 
    },
    contentContainerStyle: {
        paddingVertical: 150,
      },
})

export default SignupScreen