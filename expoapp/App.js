import { NhostAuthProvider } from "@nhost/react-auth";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Toast from 'react-native-toast-message';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import { nhost } from './utils/nhost'

export default function App() {
  return (
    <NhostAuthProvider nhost={nhost}>
      <NavigationContainer>
        <Stack.Navigator>              
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        </Stack.Navigator> 
      </NavigationContainer>
      <Toast />
    </NhostAuthProvider>
  );
}
