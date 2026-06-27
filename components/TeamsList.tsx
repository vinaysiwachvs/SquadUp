import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Users } from "lucide-react-native";
import theme from "../constants/theme";
import { Team } from "../constants/Interface/team";

interface TeamsListProps {
	teams: Team[];
	title?: string;
}

export default function TeamsList({
	teams,
	title = "My Teams",
}: TeamsListProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>

			<View style={styles.listContainer}>
				{teams.map((team) => (
					<View key={team.id} style={styles.card}>
						<View style={styles.leftSection}>
							<View style={styles.emojiContainer}>
								<Text style={styles.emoji}>{team.emoji}</Text>
							</View>

							<View style={styles.teamInfo}>
								<Text style={styles.teamName}>{team.name}</Text>

								<Text style={styles.teamMeta}>
									{team.sport}
									{team.type ? ` • ${team.type}` : ""}
								</Text>
							</View>
						</View>

						<View style={styles.playerContainer}>
							<Users size={16} color='#374151' strokeWidth={2} />

							<Text style={styles.playerCount}>
								{team.playerCount ?? 0}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
	},

	title: {
		fontSize: 20,
		fontWeight: "600",
		color: theme.colors.textPrimary,
		marginBottom: 14,
		paddingHorizontal: 20,
	},

	listContainer: {
		paddingHorizontal: 15,
		gap: 14,
	},

	card: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		backgroundColor: "#FFFFFF",

		borderRadius: 22,

		paddingHorizontal: 12,
		paddingVertical: 14,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.08,
		shadowRadius: 10,

		elevation: 3,
	},

	leftSection: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},

	emojiContainer: {
		width: 72,
		height: 72,
		borderRadius: 22,

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.background,

		marginRight: 12,
	},

	emoji: {
		fontSize: 28,
	},

	teamInfo: {
		flex: 1,
	},

	teamName: {
		fontSize: 18,
		fontWeight: "700",
		color: theme.colors.textPrimary,
		marginBottom: 6,
	},

	teamMeta: {
		fontSize: 15,
		fontWeight: "500",
		color: theme.colors.textMuted,
	},

	playerContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 12,
	},

	playerCount: {
		fontSize: 14,
		fontWeight: "500",
		color: theme.colors.textPrimary,
		marginLeft: 4,
	},
});
