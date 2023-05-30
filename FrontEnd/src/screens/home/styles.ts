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
		marginTop: 4,
		marginLeft: 10,
		color: "#000000"
	},
	progress: {
		fontWeight: "400",
		fontSize: 15,
		lineHeight: 20,
		textTransform: "capitalize",
		color: "#565656"
	},
	progressView: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline"
	},
	progressPercent: {
		fontWeight: "700",
		fontSize: 40,
		lineHeight: 50,
		color: "#000000"
	},
	progressNumbers: {
		fontWeight: "700",
		fontSize: 15,
		lineHeight: 20,
		textTransform: "capitalize",
		color: "#565656"
	},
	progressNumbersView: {
		display: "flex",
		flexDirection: "row"
	},
	backgroundImage: {
		resizeMode: 'cover',
		display: "flex",
		flexDirection: "row",
		borderRadius: 20,
	},
	imageWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 7,
		marginHorizontal: 15,
		justifyContent: "space-between"
	},
	weightView: {
		height: 42,
		width: 42,
		padding: 8,
		borderRadius: 8,
		backgroundColor: "#830289"
	},
	weight: {
		height: 24,
		width: 24
	},
	textWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	myTraning: {
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 19,
		marginLeft: 9,
		color: "#ffffff"
	},
	arrow: {
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#830289"
	},
	myProgress: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	daysInARow: {
		fontWeight: "600",
		fontSize: 20,
		lineHeight: 25,
		color: "#000000"
	},
	consecutiveDays: {
		maxWidth: 95,
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 20,
		color: "#565656"
	}
})