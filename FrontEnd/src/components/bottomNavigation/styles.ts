import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	opacityView: {
		opacity: 0.3,
	},
	wrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 6,
		backgroundColor: "#ffffff",
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
	},
	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: 10,
	},
	itemIcon: {
		width: 26,
		height: 26,
	},
	itemText: {
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 18,
		color: "#000000",
	}
})