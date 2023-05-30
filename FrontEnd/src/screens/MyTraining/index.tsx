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
import TruncatedText from '../../components/truncatedText';

type MyTraningScreenProp = NativeStackNavigationProp<RootStackParamList, "MyTraining">;

export const MyTraining = () => {
	return (
		<>
			<SafeAreaView style={styles.wrapper}>
				<View style={styles.titlePage}>
					<TouchableOpacity>
						<Ionicons name="arrow-back-outline" size={34} color="#830289" />
					</TouchableOpacity>
					<Text style={styles.titlePageText} >meu treino</Text>
				</View>
				<Spacer height={20} />
				<Text style={styles.title}>
					divisões de treino
				</Text>
				<View style={styles.ficha}>
					<Text style={styles.fichaName}>
						A
					</Text>
					<TruncatedText text='Abdômen, Peitoral, Dorsal, Pernas' maxLength={30} style={styles.fichaExercicios} />
				</View>
			</SafeAreaView>
			<BottomNavigation />
		</>
	)
}