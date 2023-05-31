import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../../components/spacer';
import { styles } from './styles'

type TrainingFilesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TrainingFiles'>;

type TrainingFilesScreenProp = RouteProp<RootStackParamList, "TrainingFiles">;

type Props = {
	navigation: TrainingFilesScreenNavigationProp;
	route: TrainingFilesScreenProp;
}

export const TrainingFiles = ({ route }: Props) => {
	const { trainingSet } = route.params;
	const { name, type, trainingFiles } = trainingSet
	const navigation = useNavigation<TrainingFilesScreenNavigationProp>();

	return (
		<SafeAreaView>
			<View style={styles.titlePage}>
				<TouchableOpacity onPress={() => navigation.navigate("MyTraining")}>
					<Ionicons name="arrow-back-outline" size={34} color="#830289" />
				</TouchableOpacity>
				<Text style={styles.titlePageText} >{`Ficha ${name}`} </Text>
			</View>
			<Spacer height={20} />
			{
				trainingFiles.map(trainingFiles => (
					<View style={styles.exerciseView} key={trainingFiles.type}>
						<Image source={{ uri: trainingFiles.exerciseImage }} style={styles.image} />
						<View style={styles.exerciseNameView}>
							<Text style={styles.exerciseName}>
								{trainingFiles.exercise}
							</Text>
							<View style={styles.setsCss}>
								<Text style={styles.setsName}>
									{`${trainingFiles.sets}x`}
								</Text>
								<Text style={styles.setsName}>
									{trainingFiles.repetitions}
								</Text>
							</View>
						</View>
					</View>
				))
			}

		</SafeAreaView>
	)
}