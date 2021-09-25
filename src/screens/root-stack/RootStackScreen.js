import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../splash/SplashScreen";
import LoginScreen from "../auth/login/LoginScreen";
import RegisterScreen from "../auth/register/RegisterScreen";
import OtpVerifyScreen from "../auth/otpverify/OtpVerifyScreen";


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='false'>
        <RootStack.Screen name="Splash" component={SplashScreen}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Register" component={RegisterScreen}/>
        <RootStack.Screen name="OtpVerify" component={OtpVerifyScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
