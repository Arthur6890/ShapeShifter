import React, { useState } from 'react';
import { Image, View, TextInput, TouchableOpacity, Text, StatusBar } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../assets/images/AppLogo.png"
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { styles } from "./styles";

type loginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export const LoginScreen = () => {
	const navigation = useNavigation<loginScreenProp>();

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

			<View>
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

				<View>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={handleLogin}
						style={styles.loginButton}
					>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.7}
						onPress={() => navigation.navigate("ForgotPassword")}
						style={styles.forgotPasswordButton}
					>
						<Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
					</TouchableOpacity>
				</View>
			</View>


			<TouchableOpacity activeOpacity={0.7}
				onPress={() => navigation.navigate("Signup")}
				style={styles.createAccountButton}
			>
				<Text style={styles.createAccount}>Crie sua conta!</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}
