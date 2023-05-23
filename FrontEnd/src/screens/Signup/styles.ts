import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
	},
	image: {
		width: 194,
		height: 182,

	},
	inputsWrapper: {
		justifyContent: "space-between",
	},
	inputView: {
		flexDirection: "row",
		marginBottom: 33,
	},
	input: {
		width: 230,
		borderBottomWidth: 1,
		marginLeft: 10,
		color: "#ffffff",
		borderBottomColor: "#ffffff",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		width: 250,
		paddingVertical: 19,
		backgroundColor: "#ffffff"
	},
	buttonText: {
		fontSize: 28,
		lineHeight: 33,
		fontWeight: "600",
		textTransform: "uppercase",
		color: "#684369"
	},
	createAccount: {
		fontWeight: "600",
		fontSize: 28,
		lineHeight: 33,
		color: "#FFFFFF"
	}
})