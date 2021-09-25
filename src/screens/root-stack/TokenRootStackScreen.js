import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PersonalInfoForm from "../profile/personal-info/PersonalInfoForm";
import ContactInfoForm from "../profile/contact-info/ContactInfoForm";
import GuardianInfoForm from "../profile/guardian-info/GuardianInfoForm";

const RootStack = createStackNavigator();

const TokenRootStackScreen = ({navigation}) => (
    <RootStack.Navigator options='true'>
        <RootStack.Screen name="Personal" component={PersonalInfoForm}/>
        <RootStack.Screen name="Contact" component={ContactInfoForm}/>
        <RootStack.Screen name="Guardian" component={GuardianInfoForm}/>
    </RootStack.Navigator>
);

export default TokenRootStackScreen;
