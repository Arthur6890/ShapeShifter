import React, { useState, useContext } from 'react';
import { Image, View, TextInput, TouchableOpacity, Text, StatusBar } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../assets/images/AppLogo.png"
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { MaterialIcons } from '@expo/vector-icons';
import { User, useLogin } from '../../context/UserContext';
import { styles } from "./styles";
import { UserMocked } from '../../mock/user';

type loginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export const LoginScreen = () => {
	const navigation = useNavigation<loginScreenProp>();
	const { dispatch } = useLogin()

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleUserNameChange = (inputText: string) => {
		setUserName(inputText);
	};

	const handlePasswordChange = (inputText: string) => {
		setPassword(inputText);
	};

	const handleLogin = async () => {
		try {
			console.log(`${userName}${password}`)
			const response = await fetch(`http://192.168.0.30:3000/user/login/`, {
				method: "POST", body: JSON.stringify({ userName, password }), headers: {
					"Content-Type": "application/json",
				},
			})
			const user: User = await response.json()
			// const user = UserMocked
			dispatch({ type: "login", payload: user })
			navigation.navigate('Home')
		} catch (e) {
			console.log("Erro!", e)
		}
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
							placeholder="Nome de usuário"
							placeholderTextColor={"white"}
							value={userName}
							onChangeText={handleUserNameChange}
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
