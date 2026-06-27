import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/theme";
import ProfileBanner from "../ProfileBanner";
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
						<Text style={styles.title}>
							Hi there, welcome back.
						</Text>
						<Text style={styles.subtitle}>
							Open settings to update your profile, notifications,
							and search radius.
						</Text>
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
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		color: theme.colors.textPrimary,
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		lineHeight: 22,
		color: theme.colors.textMuted,
	},
});
