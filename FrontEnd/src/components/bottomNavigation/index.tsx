import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Weight from "../../assets/images/gymWeight.png"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles"
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;


const BottomNavigation = () => {
	const route = useRoute();
	const currentPath = route.name;
	const navigation = useNavigation<HomeScreenProp>()

	return (
		<View style={styles.wrapper}>

			<TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Home")}>
				<View style={currentPath === "Home" ? null : styles.opacityView}>
					<AntDesign name="home" size={26} color="#830289" />
				</View>
				<Text style={styles.itemText}>ínicio</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item} onPress={() => navigation.navigate("MyTraining")}>
				<View style={currentPath === "MyTaining" ? null : styles.opacityView}>
					<Image source={Weight} style={styles.itemIcon} />
				</View>
				<Text style={styles.itemText}>meu treino</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Profile")}>
				<View style={currentPath === "Profile" ? null : styles.opacityView}>
					<FontAwesome name="user" size={26} color="#830289" />
				</View>
				<Text style={styles.itemText}>perfil</Text>
			</TouchableOpacity>

		</View>
	)
}

export default BottomNavigation;

