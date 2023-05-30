import React, { useState } from 'react';
import { Image, View, TextInput, TouchableOpacity, Text, StatusBar } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../assets/images/AppLogo.png"
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { styles } from "./styles";

type forgotPasswordScreenProp = NativeStackNavigationProp<RootStackParamList, "ForgotPassword">;

export const ForgotPasswordScreen = () => {
	const navigation = useNavigation<forgotPasswordScreenProp>();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleTextChange = (inputText: string) => {
		setUserName(inputText);
	};

	const handleLogin = () => {
		navigation.navigate('Home')
	};

	return (
		<LinearGradient colors={["#5D345E", "#7B5C7C"]} style={styles.container}>
			<StatusBar backgroundColor={"#5D345E"} />
			<Image source={Logo} style={styles.image} />
			<View style={styles.inputsWrapper} >
				<View style={styles.inputView} >
					<FontAwesome name="user" size={24} color="white" />
					<TextInput
						placeholder="User"
						placeholderTextColor={"white"}
						value={userName}
						onChangeText={handleTextChange}
						style={styles.input}
					/>
				</View>

				<View style={styles.inputView} >
					<FontAwesome name="user" size={24} color="white" />
					<TextInput
						placeholder="User"
						placeholderTextColor={"white"}
						value={userName}
						onChangeText={handleTextChange}
						style={styles.input}
					/>
				</View>


			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => console.log("dica")}
				style={styles.loginButton}
			>
				<Text style={styles.buttonText}>Obter Dica</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.7}
				onPress={() => navigation.navigate("Login")}
			>

				<Text style={styles.createAccount}>Login</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}
