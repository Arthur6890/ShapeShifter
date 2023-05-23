import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Card from '../../components/card';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export const Home = () => {
	return (

		<ScrollView>
			<SafeAreaView>
				<StatusBar backgroundColor={"#532954"} style='light' />
				<View style={styles.header}>
					<Text style={styles.salutation}>
						boa tarde,
					</Text>
					<Text style={styles.name}>
						Arthur
					</Text>
				</View>

				<Card title='primeiros passos' spacerHeight={7} paddingLeft={15} paddingTop={7} >
					<View>
						<Text style={styles.cardTitle}>
							Não sabe por onde começar?
						</Text>
						<TouchableOpacity style={{ display: "flex", flexDirection: "row" }} onPress={() => console.log("apertou")}>
							<AntDesign name="arrowright" size={24} color="#830289" />
							<Text style={styles.cardButtonText}>
								Ver primeiros passos
							</Text>
						</TouchableOpacity>
					</View>

				</Card>

			</SafeAreaView>
		</ScrollView>
	)
}