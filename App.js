import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginMobileScreen from './LoginScreen';
import OTPVerificationScreen from './OTPVerificationScreen';
import NewAccountScreen from './NewAccountScreen';
import OnboardScreen1 from "./OnBoard1";
import OnboardScreen2 from "./OnBoard2";
import OnboardScreen3 from "./Onboard3";
import OnboardScreen4 from "./Onboard4";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginMobile" component={LoginMobileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewAccount" component={NewAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard1" component={OnboardScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard2" component={OnboardScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard3" component={OnboardScreen3} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard4" component={OnboardScreen4} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
