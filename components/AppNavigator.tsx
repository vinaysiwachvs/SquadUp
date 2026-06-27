import React from "react";
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationMenuTabKey } from "./NavigationMenu";

interface AppNavigatorProps {
	activeTab: NavigationMenuTabKey;
	showProfileSettings: boolean;
	onOpenProfileSettings: () => void;
	onCloseProfileSettings: () => void;
}

export default function AppNavigator({
	activeTab,
	showProfileSettings,
	onOpenProfileSettings,
	onCloseProfileSettings,
}: AppNavigatorProps) {
	return (
		<>
			{activeTab === "home" && <HomeScreen />}
			{activeTab === "discover" && <DiscoverScreen />}
			{activeTab === "chat" && <ChatScreen />}
			{activeTab === "profile" && (
				<ProfileScreen
					settingsOpen={showProfileSettings}
					onOpenSettings={onOpenProfileSettings}
					onCloseSettings={onCloseProfileSettings}
				/>
			)}
		</>
	);
}
