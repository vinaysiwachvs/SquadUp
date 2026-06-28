import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import theme from "../constants/theme";

export interface SportFilterItem {
	id: string;
	name: string;
	emoji: string;
}

interface SportFilterProps {
	sports: SportFilterItem[];
	selectedSport: string;
	onSelectSport: (sport: string) => void;
}

export default function SportFilter({
	sports,
	selectedSport,
	onSelectSport,
}: SportFilterProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Filter by sport</Text>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.scrollContent}>
				{sports.map((sport) => {
					const active = selectedSport === sport.id;

					return (
						<TouchableOpacity
							key={sport.id}
							activeOpacity={0.85}
							onPress={() => onSelectSport(sport.id)}
							style={[styles.chip, active && styles.activeChip]}>
							<Text style={styles.emoji}>{sport.emoji}</Text>

							<Text
								style={[
									styles.label,
									active && styles.activeLabel,
								]}>
								{sport.name}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
	},

	heading: {
		fontSize: 24,
		fontWeight: "700",
		color: theme.colors.textPrimary,

		paddingHorizontal: 20,

		marginBottom: 16,
	},

	scrollContent: {
		paddingHorizontal: 20,
	},

	chip: {
		height: 28,
		paddingHorizontal: 12,
		borderRadius: 36,
		backgroundColor: "#FFF",

		marginRight: 4,

		flexDirection: "row",
		alignItems: "center",

		borderWidth: 1,
		borderColor: "#ECECEC",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.05,
		shadowRadius: 8,
	},

	activeChip: {
		backgroundColor: theme.colors.primary,
		borderColor: theme.colors.primary,
	},

	emoji: {
		fontSize: 16,
	},

	label: {
		fontSize: 12,
		fontWeight: "600",
		color: theme.colors.textPrimary,
	},

	activeLabel: {
		color: "#FFF",
	},
});
