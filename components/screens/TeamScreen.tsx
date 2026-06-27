import React, { useState } from "react";

import {
	ScrollView,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Team } from "../../constants/Interface/team";

interface TeamScreenProps {
	onClose?: () => void;
	team: Team;
}

export default function TeamScreen({ onClose, team }: TeamScreenProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{team.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4F7F9",
	},

	heading: {
		fontSize: 28,
		fontWeight: "700",
		color: "#111827",
	},
});
