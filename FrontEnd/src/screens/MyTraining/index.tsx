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
import { TrainingFile, TrainingSet, useLogin } from '../../context/UserContext';


type MyTraningScreenProp = NativeStackNavigationProp<RootStackParamList, "MyTraining">;

export const MyTraining = () => {
	function extractTypes(objects: TrainingFile[]): string {
		const typesArray = objects.map(obj => obj.type);
		const typesString = typesArray.join(', ');
		return typesString;
	}

	const navigation = useNavigation<MyTraningScreenProp>();
	const { state } = useLogin()
	const trainingSets = state.user?.trainingSets
	const goToTrainingFile = (trainingSet: TrainingSet) => {
		navigation.navigate("TrainingFiles", { trainingSet })
	}

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
				{
					trainingSets?.map(trainingSet => (
						<TouchableOpacity style={styles.ficha} onPress={() => goToTrainingFile(trainingSet)} key={trainingSet.type}>
							<Text style={styles.fichaName}>
								{trainingSet.name}
							</Text>
							<Text ellipsizeMode='tail' numberOfLines={1} style={styles.fichaExercicios} >
								{extractTypes(trainingSet.trainingFiles)}
							</Text>
						</TouchableOpacity>
					))
				}

			</SafeAreaView>
			<BottomNavigation />
		</>
	)
}