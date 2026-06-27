import React, { useState } from "react";
import AppShell from "./components/AppShell";
import AppNavigator from "./components/AppNavigator";
import NavigationMenu, {
	NavigationMenuTabKey,
} from "./components/NavigationMenu";

export default function App() {
	const [activeTab, setActiveTab] = useState<NavigationMenuTabKey>("home");
	const [showProfileSettings, setShowProfileSettings] = useState(false);

	return (
		<AppShell>
			<AppNavigator
				activeTab={activeTab}
				showProfileSettings={showProfileSettings}
				onOpenProfileSettings={() => setShowProfileSettings(true)}
				onCloseProfileSettings={() => setShowProfileSettings(false)}
			/>

			{!showProfileSettings && (
				<NavigationMenu
					activeTab={activeTab}
					onTabPress={setActiveTab}
				/>
			)}
		</AppShell>
	);
}
