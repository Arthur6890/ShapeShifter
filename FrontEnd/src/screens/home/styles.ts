import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	header: {
		flex: 1,
		paddingTop: 13,
		paddingBottom: 36,
		paddingLeft: 15,
		backgroundColor: "#532954",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
	salutation: {
		fontWeight: "400",
		fontSize: 15,
		lineHeight: 19,
		textTransform: "uppercase",
		color: "#ffffff"
	},
	name: {
		fontWeight: "400",
		fontSize: 36,
		lineHeight: 42,
		marginTop: 5,
		textTransform: "capitalize",
		color: "#ffffff"
	},
	firstSteps: {
		marginTop: 23,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 6,
		backgroundColor: "#ffffff",
		width: "100%",
	},
	cardTitle: {
		fontWeight: "300",
		fontSize: 24,
		lineHeight: 28,
		maxWidth: 217,
		color: "#565656"
	},
	cardButtonText: {
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 19,
		marginBottom: 28,
		marginTop: 7,
		color: "#000000"
	}
})