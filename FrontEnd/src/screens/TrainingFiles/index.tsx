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
	const { types, exercise, repetitions, sets, exerciseImage } = route.params;
	const navigation = useNavigation<TrainingFilesScreenNavigationProp>();
	console.log(route.params)
	return (
		<SafeAreaView>
			<View style={styles.titlePage}>
				<TouchableOpacity onPress={() => navigation.navigate("MyTraining")}>
					<Ionicons name="arrow-back-outline" size={34} color="#830289" />
				</TouchableOpacity>
				<Text style={styles.titlePageText} > Ficha A</Text>
			</View>
			<Spacer height={20} />
			<View style={styles.exerciseView}>
				<Image source={{ uri: exerciseImage }} style={styles.image} />
				<View style={styles.exerciseNameView}>
					<Text style={styles.exerciseName}>
						{exercise}
					</Text>
					<View style={styles.setsCss}>
						<Text style={styles.setsName}>
							{`${sets}x`}
						</Text>
						<Text style={styles.setsName}>
							{repetitions}
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}