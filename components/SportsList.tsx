import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../constants/theme";

interface Sport {
	id: string;
	name: string;
	emoji: string;
	level?: string;
}

interface SportsListProps {
	sports: Sport[];
	title?: string;
}

const DEFAULT_COLORS = [
	"#98D8C8",
	"#F7DC6F",
	"#BB8FCE",
	"#85C1E2",
	"#FF6B6B",
	"#4ECDC4",
	"#45B7D1",
	"#FFA07A",
];

export default function SportsList({
	sports,
	title = "My Sports",
}: SportsListProps) {
	const getSportColor = (index: number) => {
		return DEFAULT_COLORS[index % DEFAULT_COLORS.length];
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.listContainer}>
				{sports.map((sport, index) => (
					<View
						key={sport.id}
						style={[
							styles.sportCard,
							{
								backgroundColor: getSportColor(index),
							},
						]}>
						<View style={styles.cardHeader}>
							<Text style={{ fontSize: 16, marginRight: 2 }}>
								{sport.emoji}
							</Text>
							<Text style={styles.sportName}>{sport.name}</Text>
							{sport.level && (
								<Text style={styles.levelBadge}>
									{sport.level}
								</Text>
							)}
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
		fontSize: 16,
		fontWeight: "700",
		color: theme.colors.textPrimary,
		marginBottom: 12,
		paddingHorizontal: 20,
	},

	scrollContent: {
		paddingHorizontal: 20,
		paddingRight: 32,
	},

	listContainer: {
		paddingHorizontal: 20,
		gap: 12,
	},

	sportCard: {
		borderRadius: 16,
		paddingHorizontal: 14,
		paddingVertical: 14,

		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.12,
		shadowRadius: 8,
		elevation: 3,

		justifyContent: "space-between",
	},

	cardHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},

	sportName: {
		fontSize: 15,
		fontWeight: "700",
		color: "#ffffff",
		marginLeft: 8,
		flex: 1,
	},

	levelBadge: {
		fontSize: 14,
		fontWeight: "600",
		color: "rgba(255, 255, 255, 0.9)",
		backgroundColor: "rgba(0, 0, 0, 0.15)",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 6,
		alignSelf: "flex-start",
	},

	experience: {
		fontSize: 12,
		fontWeight: "500",
		color: "rgba(255, 255, 255, 0.8)",
	},
});
