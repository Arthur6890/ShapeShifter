import React from 'react'
import BottomNavigation from '../../components/bottomNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../../components/spacer';
import TruncatedText from '../../components/truncatedText';
import { TrainingFilesMocked } from '../../mock/user';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'


type MyTraningScreenProp = NativeStackNavigationProp<RootStackParamList, "MyTraining">;
interface Exercise {
	types: string;
	exercise: string;
	sets: number;
	repetitions: number;
	exerciseImage: string;
}

export const MyTraining = () => {
	function extractTypes(objects: Exercise[]): string {
		const typesArray = objects.map(obj => obj.types);
		const typesString = typesArray.join(', ');
		return typesString;
	}

	const navigation = useNavigation<MyTraningScreenProp>();

	const goToTrainingFile = () => {
		navigation.navigate("TrainingFiles", { exercise: TrainingFilesMocked[0].exercise, exerciseImage: TrainingFilesMocked[0].exerciseImage, repetitions: TrainingFilesMocked[0].repetitions, sets: TrainingFilesMocked[0].repetitions, types: TrainingFilesMocked[0].types })
	}

	const truncatedText = extractTypes(TrainingFilesMocked)
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
				<TouchableOpacity style={styles.ficha} onPress={goToTrainingFile}>
					<Text style={styles.fichaName}>
						A
					</Text>
					<TruncatedText text={truncatedText} maxLength={30} style={styles.fichaExercicios} />
				</TouchableOpacity>
			</SafeAreaView>
			<BottomNavigation />
		</>
	)
}