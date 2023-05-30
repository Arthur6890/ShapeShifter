import React from 'react'
import BottomNavigation from '../../components/bottomNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Spacer from '../../components/spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles'

type ProfileScreenProp = NativeStackNavigationProp<RootStackParamList, "Profile">;

export const Profile = () => {
	return (
		<>
			<SafeAreaView>
				<ScrollView style={styles.main}>
					<View style={styles.title}>
						<TouchableOpacity>
							<Ionicons name="arrow-back-outline" size={34} color="#830289" />
						</TouchableOpacity>
						<Text style={styles.titleText} >perfil</Text>
					</View>

					<Spacer height={37} />

					<Text style={styles.profileName}>Arthur</Text>

					<Spacer height={19} />

					<Text style={styles.goalTitle}>Objetivo</Text>

					<Text style={styles.goal}>Emagrecer</Text>

					<Spacer height={17} />


					<View style={styles.item}>
						<Feather name="play" size={24} color="#830289" />
						<Text style={styles.itemText}>
							Primeiros Passos
						</Text>
					</View>

					<View style={styles.item}>
						<Ionicons name="megaphone-outline" size={24} color="#830289" />
						<Text style={styles.itemText}>
							Novidades
						</Text>
					</View>

					<View style={styles.item}>
						<MaterialCommunityIcons name="shield-alert-outline" size={24} color="#830289" />
						<Text style={styles.itemText}>
							Aviso de privacidade
						</Text>
					</View>

					<View style={styles.item}>
						<Ionicons name="md-newspaper-outline" size={24} color="#830289" />
						<Text style={styles.itemText}>
							Termos de uso
						</Text>
					</View>

					<View style={styles.item}>
						<MaterialCommunityIcons name="shield-check-outline" size={24} color="#830289" />
						<Text style={styles.itemText}>
							Comprovante de vacina
						</Text>
					</View>

					<View style={styles.item}>
						<MaterialIcons name="phone-iphone" size={24} color="#830289" />
						<Text style={styles.itemText}>
							Fale Conosco
						</Text>
					</View>

					<View style={styles.item}>
						<MaterialIcons name="logout" size={24} color="#D00000" />
						<Text style={styles.itemTextLogout}>
							Sair
						</Text>
					</View>

				</ScrollView>
			</SafeAreaView>
			<BottomNavigation />
		</>
	)
}