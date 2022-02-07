import React, { useState } from 'react'
import { Text, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, TextInput, View, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { nhost } from '../utils/nhost'

const SCREEN_WIDTH = Dimensions.get('window').width


const SignUpScreen = () => {
    const navigation = useNavigation();

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const SignUpUser = async () => {
        try {
            const res = await nhost.auth.signUp({
                email: email,
                password: password,
                options: {
                    displayName: firstName+ ' '+ lastName,
                },
            })              
            console.log(res)
            if(res.error) {
                Toast.show({
                    type: 'error',
                    text1: res.error.message === "Error validating request body. \"email\" must be a valid email." ? 'Not a valid Email' : res.error.message,
                });
                return 
            }
            Toast.show({
                type: 'success',
                text1: "Successfully signed up. You'll have to verify your email to continue!"
            });
            navigation.navigate('SignIn')
        } catch (e) {
            Alert.alert(e)
        }
    }
    return (
        <SafeAreaView style={{alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 30}}>
            <ScrollView style={{backgroundColor: '#fafafa', width: SCREEN_WIDTH}} contentContainerStyle={{marginHorizontal: 15, paddingBottom: 100}}>
                <Text style={{fontSize: 30, marginTop: 20}}>Sign Up</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#fff', borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5}}>
                    <TextInput value={firstName} onChangeText={setFirstName} style={{flex: 1}} placeholder='First Name'/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#fff', borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5}}>
                    <TextInput value={lastName} onChangeText={setLastName} style={{flex: 1}} placeholder='Last Name'/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#fff', borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5}}>
                    <TextInput value={email} onChangeText={setEmail} style={{flex: 1}} placeholder='Email Address'/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#fff', borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5}}>
                    <TextInput value={password} onChangeText={setPassword} style={{flex: 1}} placeholder='Password' secureTextEntry={true}/>
                </View>   
                <TouchableOpacity onPress={SignUpUser} style={{flex: 1, padding: 15, marginTop: 20, alignItems: 'center', backgroundColor: '#006ee6'}}>
                    <Text style={{color: '#fff', fontSize: 14}}>Sign Up</Text>
                </TouchableOpacity>       
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{flex: 1, padding: 15, marginTop: 20, alignItems: 'center', backgroundColor: '#006ee6'}}>
                    <Text style={{color: '#fff', fontSize: 14}}>Go To SignIn</Text>
                </TouchableOpacity>        
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen