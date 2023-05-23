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
		// marginBottom: 73,
	},
	inputsWrapper: {
		height: 100,
		justifyContent: "space-between",
	},
	inputView: {
		flexDirection: "row"
	},
	input: {
		width: 230,
		borderBottomWidth: 1,
		marginLeft: 10,
		color: "#ffffff",
		borderBottomColor: "#ffffff",
	},
	loginButton: {
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
	forgotPasswordButton: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	forgotPassword: {
		fontWeight: "600",
		fontSize: 20,
		lineHeight: 23,
		color: "#FFFFFF",
	},
	createAccountButton: {
		display: "flex",
		// marginBottom: 10,
	},
	createAccount: {
		fontWeight: "600",
		fontSize: 28,
		lineHeight: 33,
		color: "#FFFFFF",
	}

})