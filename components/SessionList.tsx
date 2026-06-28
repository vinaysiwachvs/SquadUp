import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Session } from "../constants/Interface/session";
import SessionCard from "./SessionCard";
import theme from "../constants/theme";
import SportFilter from "./SportFilter";
import { sports } from "../constants/sports";

interface SessionListProps {
	sessions: Session[];
	onSessionPress?: (session: Session) => void;
}

export default function SessionList({
	sessions,
	onSessionPress,
}: SessionListProps) {
	const [selectedSport, setSelectedSport] = useState("all");
	const filteredSessions =
		selectedSport === "all"
			? sessions
			: sessions.filter(
					(s) =>
						s.sport.toLowerCase() === selectedSport.toLowerCase(),
				);

	return (
		<View style={styles.container}>
			<SportFilter
				sports={sports}
				selectedSport={selectedSport}
				onSelectSport={setSelectedSport}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Nearby Sessions</Text>

				<Text style={styles.count}>
					{filteredSessions.length} Found
				</Text>
			</View>

			{filteredSessions.length > 0 ? (
				filteredSessions.map((session) => (
					<SessionCard
						key={session.id}
						session={session}
						onPress={() => onSessionPress?.(session)}
					/>
				))
			) : (
				<View style={styles.emptyContainer}>
					<Text style={styles.emptyEmoji}>🔍</Text>

					<Text style={styles.emptyTitle}>No sessions found</Text>

					<Text style={styles.emptySubtitle}>
						Try selecting a different sport or check back later.
					</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
	},

	header: {
		paddingHorizontal: 20,
		marginBottom: 18,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	title: {
		fontSize: 20,
		fontWeight: "600",
		color: theme.colors.textPrimary,
	},

	count: {
		fontSize: 14,
		fontWeight: "500",
		color: theme.colors.primary,
	},

	emptyContainer: {
		alignItems: "center",
		justifyContent: "center",

		paddingVertical: 40,
		paddingHorizontal: 30,
	},

	emptyEmoji: {
		fontSize: 32,
		marginBottom: 12,
	},

	emptyTitle: {
		fontSize: 20,
		fontWeight: "700",
		color: theme.colors.textPrimary,
		marginBottom: 8,
	},

	emptySubtitle: {
		fontSize: 15,
		color: theme.colors.textMuted,
		textAlign: "center",
		lineHeight: 22,
	},
});
