import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Card from '../../components/card';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import NextGym from "../../assets/images/proximoTreino.png"
import Weight from "../../assets/images/gymWeight.png"
import Spacer from '../../components/spacer';
import { Foundation } from '@expo/vector-icons';
import BottomNavigation from '../../components/bottomNavigation';
import { UserMocked } from '../../mock/user';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { useLogin } from '../../context/UserContext';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export const Home = () => {
	const { state } = useLogin()
	const { user } = state
	const percentage = user?.daysInaMonthTraining ? user.daysInaMonthTraining / 30 * 100 : 0
	const daysInARow = user?.daysInaRowTraining || 0
	const daysInaMonthTraining = user?.daysInaMonthTraining
	const progressBarValue = user?.daysInaMonthTraining ? user.daysInaMonthTraining / 30 : 0
	const navigation = useNavigation<HomeScreenProp>();
	console.log(user)
	console.log(progressBarValue, user?.daysInaMonthTraining)
	return (
		<View>
			<ScrollView>
				<SafeAreaView>
					<StatusBar backgroundColor={"#532954"} style='light' />
					<View style={styles.header}>
						<Text style={styles.salutation}>
							boa tarde,
						</Text>
						<Text style={styles.name}>
							{user?.name}
						</Text>
					</View>

					<Card title='primeiros passos' spacerHeight={7} paddingLeft={15} paddingTop={7} >
						<View>
							<Text style={styles.cardTitle}>
								Não sabe por onde começar?
							</Text>
							<TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }} onPress={() => console.log("apertou")}>
								<AntDesign name="arrowright" size={24} color="#830289" />
								<Text style={styles.cardButtonText}>
									Ver primeiros passos
								</Text>
							</TouchableOpacity>
						</View>

					</Card>

					<Card title='meu treino' spacerHeight={7} paddingLeft={15} paddingTop={7} paddingRight={31} paddingBottom={36} >
						<View>
							<Spacer height={28} />
							<Text style={styles.progress}>
								Progresso
							</Text>
							<Spacer height={5} />
							<View style={styles.progressView}>
								<Text style={styles.progressPercent}>
									{`${Math.round(percentage)} %`}
								</Text>
								<View style={styles.progressNumbersView}>
									<Text style={styles.progress}>
										Sessões:
									</Text>
									<Text style={styles.progressNumbers}>
										{`${daysInaMonthTraining}/30`}
									</Text>
								</View>
							</View>
							<ProgressBar progress={progressBarValue} color={"#830289"} />

						</View>
					</Card>

					<Card title='próximo treino' spacerHeight={28} paddingRight={31} paddingLeft={15} paddingBottom={35} paddingTop={7}>
						<ImageBackground source={NextGym} imageStyle={styles.backgroundImage}>
							<TouchableOpacity style={styles.imageWrapper} onPress={() => navigation.navigate('MyTraining')}>
								<View style={styles.textWrapper}>
									<View style={styles.weightView} >
										<Image source={Weight} style={styles.weight} />
									</View>
									<Text style={styles.myTraning}>
										Acessar minhas fichas de treino
									</Text>
								</View>
								<View style={styles.arrow}>
									<AntDesign name="arrowright" size={24} color="#ffffff" />
								</View>
							</TouchableOpacity>
						</ImageBackground>
					</Card>

					<Card title='meu progresso' spacerHeight={8} paddingBottom={5} paddingLeft={15} paddingTop={7}>
						<View style={styles.myProgress}>
							<Foundation name="calendar" size={83} color="#830289" />
							<Text style={styles.daysInARow}>
								{daysInARow}
							</Text>
							<Text style={styles.consecutiveDays}>
								Dias de treino
								Consecutivos
							</Text>
						</View>
					</Card>
					<Spacer height={80} />

				</SafeAreaView>
			</ScrollView>
			<BottomNavigation />
		</View>
	)
}