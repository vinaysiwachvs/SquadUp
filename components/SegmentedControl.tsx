import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import theme from "../constants/theme";

export interface SegmentItem {
	id: string;
	label: string;
}

interface SegmentedControlProps {
	items: SegmentItem[];
	selected: string;
	onChange: (id: string) => void;
}

export default function SegmentedControl({
	items,
	selected,
	onChange,
}: SegmentedControlProps) {
	return (
		<View style={styles.container}>
			{items.map((item) => {
				const active = item.id === selected;

				return (
					<TouchableOpacity
						key={item.id}
						activeOpacity={0.85}
						onPress={() => onChange(item.id)}
						style={[
							styles.segment,
							active && styles.activeSegment,
						]}>
						<Text
							style={[
								styles.label,
								active && styles.activeLabel,
							]}>
							{item.label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
		marginHorizontal: 12,
		backgroundColor: "#FFFFFF",
		borderRadius: 28,

		padding: 8,

		flexDirection: "row",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.05,
		shadowRadius: 12,

		elevation: 3,
	},

	segment: {
		flex: 1,
		height: 44,

		borderRadius: 22,

		alignItems: "center",
		justifyContent: "center",
	},

	activeSegment: {
		backgroundColor: theme.colors.primary,

		shadowColor: theme.colors.primary,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.18,
		shadowRadius: 10,

		elevation: 5,
	},

	label: {
		fontSize: 18,
		fontWeight: "500",

		color: theme.colors.textMuted,
	},

	activeLabel: {
		color: "#FFFFFF",
	},
});
