// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login/index';
import { Home } from '../screens/home';
import { SignupScreen } from '../screens/Signup';
import { ForgotPasswordScreen } from '../screens/forgotPassword';

export type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Signup: undefined
	ForgotPassword: undefined
};

const Stack = createNativeStackNavigator();

export function Routes() {
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, headerStyle: { backgroundColor: "#ffffff" } }} >
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Signup" component={SignupScreen} />
				<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
