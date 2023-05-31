import React, { useState } from 'react'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../../assets/images/AppLogo.png"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

type signupScreenProp = NativeStackNavigationProp<RootStackParamList, "Signup">;

export const SignupScreen = () => {
	const navigation = useNavigation<signupScreenProp>();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [tip, setTip] = useState('');

	const handleUserNameChange = (inputText: string) => {
		setUserName(inputText);
	};
	const handlePasswordChange = (inputText: string) => {
		setPassword(inputText);
	};
	const handleEmailChange = (inputText: string) => {
		setEmail(inputText);
	};
	const handleTipChange = (inputText: string) => {
		setTip(inputText);
	};

	const handleSignup = async () => {
		try {
			const response = await fetch(`http://192.168.0.30:3000/user/create`, {
				method: "POST", body: JSON.stringify({ userName, password, email, tip }), headers: {
					"Content-Type": "application/json",
				},
			})
			console.log("Usuário criado com sucesso!")
		} catch (e) {
			console.log("Erro!", e)
		}
	};
	return (
		<LinearGradient colors={["#5D345E", "#7B5C7C"]} style={styles.container}>
			<StatusBar backgroundColor={"#5D345E"} />
			<Image source={Logo} style={styles.image} />
			<View style={styles.inputsWrapper} >
				<View style={styles.inputView} >
					<FontAwesome name="user" size={24} color="white" />
					<TextInput
						placeholder="Username"
						placeholderTextColor={"white"}
						value={userName}
						onChangeText={handleUserNameChange}
						style={styles.input}
					/>
				</View>

				<View style={styles.inputView} >
					<MaterialCommunityIcons name="email" size={24} color="white" />
					<TextInput
						placeholder="E-Mail"
						placeholderTextColor={"white"}
						value={email}
						onChangeText={handleEmailChange}
						style={styles.input}
					/>
				</View>

				<View style={styles.inputView} >
					<MaterialIcons name="lock" size={24} color="white" />
					<TextInput
						placeholder="Senha"
						placeholderTextColor={"white"}
						value={password}
						onChangeText={handlePasswordChange}
						style={styles.input}
					/>
				</View>

				<View style={styles.inputView} >
					<MaterialCommunityIcons name="lightbulb-on" size={24} color="white" />
					<TextInput
						placeholder="Dica de senha"
						placeholderTextColor={"white"}
						value={tip}
						onChangeText={handleTipChange}
						style={styles.input}
					/>
				</View>


			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={handleSignup}
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