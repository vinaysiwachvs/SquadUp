import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import theme from "../../constants/theme";
import user from "../../constants/user";
import { sessions } from "../../constants/session";

import HomeHeader from "../HomeHeader";
import SessionList from "../SessionList";

export default function HomeScreen() {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.content}>
			{/* Home Header */}
			<HomeHeader user={user} />

			{/* Session */}
			<SessionList sessions={sessions} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingBottom: 80,
		backgroundColor: theme.colors.background,
	},
});
