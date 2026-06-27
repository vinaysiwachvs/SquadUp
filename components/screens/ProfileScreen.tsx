import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import theme from "../../constants/theme";
import user from "../../constants/user";
import ProfileBanner from "../ProfileBanner";
import ProfileDetailCard from "../ProfileDetailCard";
import SportsList from "../SportsList";
import SettingsScreen from "./SettingsScreen";
import TeamsList from "../TeamsList";

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
					<ScrollView
						style={styles.scrollView}
						showsVerticalScrollIndicator={false}>
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
						<SportsList sports={user.sports} />
						<TeamsList teams={user.teams} />
						<View style={{ paddingBottom: 75 }}></View>
					</ScrollView>
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
	scrollView: {
		flex: 1,
	},
	profileContent: {
		// marginTop: 55,
		paddingTop: 50,
		paddingHorizontal: 15,
	},
});
