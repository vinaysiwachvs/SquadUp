import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/theme";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
			<Text style={styles.subtitle}>Welcome to the Home screen.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
		backgroundColor: theme.colors.background,
	},
	title: {
		fontSize: 28,
		fontWeight: "700",
		color: theme.colors.textPrimary,
	},
	subtitle: {
		marginTop: 8,
		color: theme.colors.textMuted,
		fontSize: 16,
		textAlign: "center",
	},
});
