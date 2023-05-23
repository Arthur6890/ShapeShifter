import React, { ReactNode } from 'react'
import { Text, View } from 'react-native';
import { styles } from "./styles"
import Spacer from '../spacer';
type props = {
	title: string;
	spacerHeight: number;
	paddingTop?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingRight?: number;
	children: ReactNode
}

const Card = ({ title, children, spacerHeight, paddingBottom, paddingLeft, paddingRight, paddingTop }: props) => {
	return (
		<View style={styles.firstSteps}>
			<View style={{ paddingBottom, paddingLeft, paddingRight, paddingTop }}>
				<Text style={styles.cardTitle}>
					{title}
				</Text>
				<Spacer height={spacerHeight} />
				{children}
			</View>
		</View>

	)
}

export default Card;