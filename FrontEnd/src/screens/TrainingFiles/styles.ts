import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	titlePage: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 10
	},
	titlePageText: {
		fontWeight: "700",
		fontSize: 36,
		lineHeight: 42,
		textTransform: "capitalize",
		color: "#830289"
	},
	exerciseView: {
		display: "flex",
		flexDirection: "row",
	},
	image: {
		width: "35%",
		height: 150,
	},
	exerciseNameView: {
		width: "65%",
		borderTopColor: "#000000",
		borderTopWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 22
	},
	exerciseName: {
		fontWeight: "700",
		fontSize: 17,
		lineHeight: 20,
		color: "#000000"
	},
	setsCss: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginTop: 11
	},
	setsName: {
		fontWeight: "700",
		fontSize: 17,
		lineHeight: 23,
		color: "#830289"
	}
}) 