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

type MyTraningScreenProp = NativeStackNavigationProp<RootStackParamList, "MyTraining">;

export const MyTraining = () => {
	return (
		<>
			<SafeAreaView>
				<Text>
					divisões de treino
				</Text>
				<View>
					<Text>
						A
					</Text>
					<Text>
						Abdômen, Peitoral, Dorsal, Pern...
					</Text>
				</View>
			</SafeAreaView>
			<BottomNavigation />
		</>
	)
}