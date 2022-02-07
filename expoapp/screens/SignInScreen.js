import React, { useState } from 'react'
import { Text, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, TextInput, View, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { nhost } from '../utils/nhost'

const SCREEN_WIDTH = Dimensions.get('window').width


const SignInScreen = () => {
    const navigation = useNavigation();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const SignInUser = async () => {
        try {
            const res = await nhost.auth.signIn({
                email: email,
                password: password
            })              
            if(res.error) {
                Toast.show({
                    type: 'error',
                    text1: res.error.message,
                });
                return 
            }
            Toast.show({
                type: 'success',
                text1: "Success"
            });
        } catch (e) {
            Alert.alert(e)
        }
    }
    return (
        <SafeAreaView style={{alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 30}}>
            <ScrollView style={{backgroundColor: '#fafafa', width: SCREEN_WIDTH}} contentContainerStyle={{marginHorizontal: 15, paddingBottom: 100}}>
                <Text style={{fontSize: 30, marginTop: 20}}>Sign In</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#fff', borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5}}>
                    <TextInput value={email} onChangeText={setEmail} style={{flex: 1}} placeholder='Email Address'/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#fff', borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5}}>
                    <TextInput value={password} onChangeText={setPassword} style={{flex: 1}} placeholder='Password' secureTextEntry={true}/>
                </View>
                <TouchableOpacity onPress={SignInUser} style={{flex: 1, padding: 15, marginTop: 20, alignItems: 'center', backgroundColor: '#006ee6'}}>
                    <Text style={{color: '#fff', fontSize: 14}}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{marginTop: 60}}>
                    <Text style={{fontSize: 12}}>Don't have an account yet? Click here to sign up</Text>
                </TouchableOpacity>                
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignInScreen