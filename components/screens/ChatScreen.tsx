import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/theme";

export default function ChatScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Chat</Text>
			<Text style={styles.subtitle}>Your conversations appear here.</Text>
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
