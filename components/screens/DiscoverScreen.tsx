import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import theme from "../../constants/theme";
import user from "../../constants/user";

import DiscoverHeader from "../DiscoverHeader";
import SegmentedControl from "../SegmentedControl";
import SessionList from "../SessionList";
// import PlayerList from "../PlayerList";

import { sessions } from "../../constants/session";
import TeamsList from "../TeamsList";

export default function DiscoverScreen() {
	const tabs = [
		{
			id: "players",
			label: "Players",
		},
		{
			id: "sessions",
			label: "Sessions",
		},
		{
			id: "teams",
			label: "Teams",
		},
	];

	const [selectedTab, setSelectedTab] = useState("players");

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.content}>
			<DiscoverHeader />

			<SegmentedControl
				items={tabs}
				selected={selectedTab}
				onChange={setSelectedTab}
			/>

			{selectedTab === "sessions" && <SessionList sessions={sessions} />}

			{selectedTab === "players" &&
				// <PlayerList />
				null}

			{selectedTab === "teams" && <TeamsList teams={user.teams} />}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingBottom: 80,
		backgroundColor: theme.colors.background,
	},
});
