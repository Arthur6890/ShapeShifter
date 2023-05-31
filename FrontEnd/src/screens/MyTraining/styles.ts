import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: 20,
	},
	titlePage: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	titlePageText: {
		fontWeight: "700",
		fontSize: 36,
		lineHeight: 42,
		textTransform: "capitalize",
		color: "#830289"
	},
	title: {
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 19,
		color: "#000000",
		textTransform: "uppercase",
		marginBottom: 27
	},
	ficha: {
		flex: 1,
		maxHeight: 100,
		paddingVertical: 20,
		paddingHorizontal: 12,
		backgroundColor: "#c7c7c7",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 50,
	},
	fichaName: {
		fontWeight: "700",
		fontSize: 50,
		lineHeight: 62,
		marginRight: 12,
		color: "#830289"
	},
	fichaExercicios: {
		flex: 1,
		fontWeight: "700",
		fontSize: 22,
		lineHeight: 28,
		color: "#000000"

	}
}) 