import React from "react";
import { StyleSheet, Text, View } from "react-native";

import theme from "../constants/theme";

export default function DiscoverHeader() {
	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<View style={styles.left}>
					<Text style={styles.name}>Discover</Text>

					<View style={styles.locationRow}>
						<Text style={styles.location}>
							Find games, players and teams in your radius.
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingTop: 18,
	},

	topRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 24,
	},

	left: {
		flex: 1,
	},

	name: {
		fontSize: 28,
		fontWeight: "800",
		color: theme.colors.textPrimary,
		marginBottom: 8,
	},

	locationRow: {
		flexDirection: "row",
		alignItems: "center",
	},

	location: {
		fontSize: 14,
		color: "#6B7280",
		fontWeight: "500",
	},

	notificationButton: {
		width: 58,
		height: 58,
		borderRadius: 29,

		backgroundColor: "#FFF",

		alignItems: "center",
		justifyContent: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.08,
		shadowRadius: 10,

		elevation: 5,
	},

	notificationDot: {
		position: "absolute",
		top: 14,
		right: 14,

		width: 12,
		height: 12,

		borderRadius: 6,

		backgroundColor: "#EF5A3C",

		borderWidth: 2,
		borderColor: "#FFF",
	},

	banner: {
		height: 180,

		borderRadius: 28,

		paddingHorizontal: 24,
		paddingVertical: 26,

		overflow: "hidden",

		justifyContent: "center",
	},
});
