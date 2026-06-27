import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/theme";
import user from "../../constants/user";
import ProfileBanner from "../ProfileBanner";
import ProfileDetailCard from "../ProfileDetailCard";
import SettingsScreen from "./SettingsScreen";

interface ProfileScreenProps {
	settingsOpen: boolean;
	onOpenSettings: () => void;
	onCloseSettings: () => void;
}

export default function ProfileScreen({
	settingsOpen,
	onOpenSettings,
	onCloseSettings,
}: ProfileScreenProps) {
	return (
		<View style={styles.container}>
			{settingsOpen ? (
				<SettingsScreen onClose={onCloseSettings} />
			) : (
				<>
					<ProfileBanner onSettingsPress={onOpenSettings} />
					<View style={styles.profileContent}>
						<ProfileDetailCard
							name={user.profile.name}
							location={user.profile.location}
							sportsCount={user.profile.sportsCount}
							bio={user.profile.bio}
							stats={user.stats}
						/>
					</View>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	profileContent: {
		marginTop: 30,
		padding: 16,
		paddingTop: 24,
	},
});
