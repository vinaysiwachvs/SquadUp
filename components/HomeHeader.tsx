import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Bell, MapPin } from "lucide-react-native";
import theme from "../constants/theme";
import { User } from "../constants/Interface/user";

interface HomeHeaderProps {
	user: User;
	onNotificationPress?: () => void;
}

export default function HomeHeader({
	user,
	onNotificationPress,
}: HomeHeaderProps) {
	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<View style={styles.left}>
					<Text style={styles.greeting}>Good Morning,</Text>

					<Text style={styles.name}>
						{user.profile.name.split(" ")[0]} 👋
					</Text>

					<View style={styles.locationRow}>
						<MapPin size={18} color={theme.colors.textMuted} />

						<Text style={styles.location}>
							{user.profile.location} • within{" "}
							{user.settings.searchRadius.defaultValue} km
						</Text>
					</View>
				</View>

				<TouchableOpacity
					activeOpacity={0.8}
					onPress={onNotificationPress}
					style={styles.notificationButton}>
					<Bell size={28} color={theme.colors.textPrimary} />

					<View style={styles.notificationDot} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingTop: 18,
	},

	topRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 24,
	},

	left: {
		flex: 1,
	},

	greeting: {
		fontSize: 18,
		color: "#6B7280",
		marginBottom: 4,
	},

	name: {
		fontSize: 38,
		fontWeight: "800",
		color: theme.colors.textPrimary,
		marginBottom: 10,
	},

	locationRow: {
		flexDirection: "row",
		alignItems: "center",
	},

	location: {
		marginLeft: 6,
		fontSize: 16,
		color: "#6B7280",
		fontWeight: "500",
	},

	notificationButton: {
		width: 58,
		height: 58,
		borderRadius: 29,

		backgroundColor: "#FFF",

		alignItems: "center",
		justifyContent: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.08,
		shadowRadius: 10,

		elevation: 5,
	},

	notificationDot: {
		position: "absolute",
		top: 14,
		right: 14,

		width: 12,
		height: 12,

		borderRadius: 6,

		backgroundColor: "#EF5A3C",

		borderWidth: 2,
		borderColor: "#FFF",
	},

	banner: {
		height: 180,

		borderRadius: 28,

		paddingHorizontal: 24,
		paddingVertical: 26,

		overflow: "hidden",

		justifyContent: "center",
	},
});
