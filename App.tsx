import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar as RNStatusBar,
} from "react-native";

import NavigationMenu from "./components/NavigationMenu";
import HomeScreen from "./components/screens/HomeScreen";
import DiscoverScreen from "./components/screens/DiscoverScreen";
import ChatScreen from "./components/screens/ChatScreen";
import ProfileScreen from "./components/screens/ProfileScreen";

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
			{activeTab === "home" && <HomeScreen />}
			{activeTab === "discover" && <DiscoverScreen />}
			{activeTab === "chat" && <ChatScreen />}
			{activeTab === "profile" && (
				<ProfileScreen
					onSettings={() => console.log("Settings pressed")}
				/>
			)}

			<NavigationMenu activeTab={activeTab} onTabPress={setActiveTab} />

			<ExpoStatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f4f5f7",
		paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
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
