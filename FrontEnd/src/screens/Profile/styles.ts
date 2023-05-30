import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	main: {
		// flex: 1,
		height: 814,
	},
	title: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 19,
		paddingLeft: 19

	},
	titleText: {
		fontWeight: "700",
		fontSize: 36,
		lineHeight: 42,
		color: "#830289",
		textTransform: "capitalize",
		marginLeft: 11,
		paddingLeft: 19

	},
	profileName: {
		fontWeight: "400",
		fontSize: 36,
		lineHeight: 42,
		color: "#830289",
		textTransform: "capitalize",
		paddingLeft: 19

	},
	goalTitle: {
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 19,
		color: "#565656",
		textTransform: "capitalize",
		paddingLeft: 19

	},
	goal: {
		fontWeight: "300",
		fontSize: 24,
		lineHeight: 28,
		color: "#565656",
		textTransform: "capitalize",
		paddingLeft: 19

	},
	item: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 19,
		borderBottomWidth: 2,
		borderBottomColor: "#CBCBCB",
		paddingLeft: 19
	},
	itemText: {
		fontWeight: "300",
		fontSize: 15,
		lineHeight: 20,
		marginLeft: 10
	},
	itemTextLogout: {
		fontWeight: "300",
		fontSize: 15,
		lineHeight: 20,
		marginLeft: 10,
		color: "#D00000"
	}
})