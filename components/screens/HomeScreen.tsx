import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import theme from "../../constants/theme";
import user from "../../constants/user";
import { sessions } from "../../constants/session";

import HomeHeader from "../HomeHeader";
import SessionCard from "../SessionCard";

export default function HomeScreen() {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.content}>
			<HomeHeader user={user} />

			{sessions.map((session) => (
				<SessionCard key={session.id} session={session} />
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingBottom: 80,
		backgroundColor: theme.colors.background,
	},
});
