import React from 'react';
import { View } from 'react-native';

type Props = {
	height?: number;
	width?: number;
};

export default function Spacer({
	height,
	width,
}: Props) {
	return (
		<View style={{ height, width }} />
	);
}
