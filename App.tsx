import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import NavigationMenu from "./components/NavigationMenu";

type NavigationMenuTabKey = "home" | "discover" | "create" | "chat" | "profile";

const screenTitles: Record<NavigationMenuTabKey, string> = {
	home: "Home",
	discover: "Discover",
	create: "Create",
	chat: "Chat",
	profile: "Profile",
};

export default function App() {
	const [activeTab, setActiveTab] = useState<NavigationMenuTabKey>("home");

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.content}>
				<Text style={styles.screenTitle}>
					{screenTitles[activeTab]}
				</Text>
				<Text style={styles.screenSubtitle}>
					This is the {screenTitles[activeTab]} screen.
				</Text>
			</View>

			<NavigationMenu activeTab={activeTab} onTabPress={setActiveTab} />

			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f4f5f7",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 24,
	},
	screenTitle: {
		fontSize: 32,
		fontWeight: "700",
		marginBottom: 10,
		color: "#1f1f1f",
	},
	screenSubtitle: {
		fontSize: 16,
		color: "#666",
		textAlign: "center",
	},
});
