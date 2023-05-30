import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface TruncatedTextProps {
	text: string;
	maxLength: number;
	style: StyleProp<TextStyle>;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength, style }) => {
	if (text.length <= maxLength) {
		return <Text style={style}>{text}</Text>;
	}

	const truncatedText = `${text.slice(0, maxLength - 3)}...`;

	return <Text style={style}>{truncatedText}</Text>;
};

export default TruncatedText;
