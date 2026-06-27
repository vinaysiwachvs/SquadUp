import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../constants/theme";
import ProfileBanner from "../ProfileBanner";

interface ProfileScreenProps {
	onSettings?: () => void;
}

export default function ProfileScreen({ onSettings }: ProfileScreenProps) {
	return (
		<View style={styles.container}>
			<ProfileBanner onSettingsPress={onSettings} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: theme.colors.background,
	},
});
