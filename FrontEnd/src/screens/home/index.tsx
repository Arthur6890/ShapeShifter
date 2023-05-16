import React, { useState } from 'react';
import { Image, View, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../assets/images/AppLogo.png"
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

export const LoginScreen = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleTextChange = (inputText: string) => {
		setUserName(inputText);
	};

	const handleButtonPress = () => {
		// Lógica a ser executada ao pressionar o botão
		console.log('Texto digitado:', userName, password);
	};

	return (
		<LinearGradient colors={["#5D345E", "#7B5C7C"]} style={styles.container}>
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
				onPress={handleButtonPress}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}
