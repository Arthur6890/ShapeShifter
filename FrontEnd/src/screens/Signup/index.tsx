import React, { useState } from 'react'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../../assets/images/AppLogo.png"
import { styles } from "./styles";

type signupScreenProp = NativeStackNavigationProp<RootStackParamList, "Signup">;

export const SignupScreen = () => {
	const navigation = useNavigation<signupScreenProp>();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleTextChange = (inputText: string) => {
		setUserName(inputText);
	};

	const handleLogin = () => {
		navigation.navigate('Login')
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
				onPress={handleLogin}
				style={styles.button}
			>
				<Text style={styles.buttonText}>criar</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.7}
				onPress={() => navigation.navigate("Login")}
			>

				<Text style={styles.createAccount}>Login</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}