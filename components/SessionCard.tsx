import React from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Calendar, ChevronRight, MapPin, Users } from "lucide-react-native";

import theme from "../constants/theme";
import { Session } from "../constants/Interface/session";

interface SessionCardProps {
	session: Session;
	onPress?: () => void;
}

export default function SessionCard({ session, onPress }: SessionCardProps) {
	const progress = (session.currentPlayers / session.maxPlayers) * 100;
	const truncate = (text: string, maxLength: number) =>
		text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={styles.card}
			onPress={onPress}>
			<View style={styles.header}>
				<View style={styles.leftSection}>
					<View style={styles.iconContainer}>
						<Text style={styles.emoji}>{session.sportEmoji}</Text>
					</View>

					<View style={styles.info}>
						<Text style={styles.title}>{session.title}</Text>

						<View style={styles.infoRow}>
							<Calendar size={15} color='#64748B' />

							<Text style={styles.infoText}>{session.date}</Text>
						</View>

						<View style={styles.infoRow}>
							<MapPin size={15} color='#64748B' />

							<Text style={styles.infoText}>
								{truncate(session.location, 15)}
							</Text>

							<Text style={styles.distance}>
								{session.distance}
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.badges}>
					{!session.joined && (
						<View
							style={[
								styles.statusBadge,
								session.status === "FULL" && styles.fullBadge,
							]}>
							<Text
								style={[
									styles.statusText,
									session.status === "FULL" &&
										styles.fullText,
								]}>
								{session.status}
							</Text>
						</View>
					)}

					{session.joined && (
						<View style={styles.joinedBadge}>
							<Text style={styles.joinedText}>JOINED</Text>
						</View>
					)}
				</View>
			</View>
			<View style={styles.bottomRow}>
				<View style={styles.players}>
					<Users size={17} color='#64748B' />

					<Text style={styles.playersText}>
						{session.currentPlayers}/{session.maxPlayers} Players
					</Text>
				</View>

				<View style={styles.priceBadge}>
					<Text style={styles.price}>{session.price}</Text>
				</View>
			</View>
			<View style={styles.progressTrack}>
				<View
					style={[
						styles.progress,
						{
							width: `${progress}%`,
						},
					]}
				/>
			</View>
			<View style={styles.footer}>
				<Text style={styles.spots}>
					{session.openSpots} spots remaining
				</Text>

				<ChevronRight size={22} color='#94A3B8' />
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	card: {
		backgroundColor: "#FFF",

		marginHorizontal: 20,
		marginBottom: 18,

		padding: 20,

		borderRadius: 26,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.06,
		shadowRadius: 12,

		elevation: 4,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	leftSection: {
		flexDirection: "row",
		flex: 1,
	},

	iconContainer: {
		width: 64,
		height: 64,

		borderRadius: 20,

		backgroundColor: "#F5F7FA",

		alignItems: "center",
		justifyContent: "center",

		marginRight: 16,
	},

	emoji: {
		fontSize: 34,
	},

	info: {
		flex: 1,
	},

	title: {
		fontSize: 24,
		fontWeight: "600",
		color: theme.colors.textPrimary,
	},

	infoRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 8,
	},

	infoText: {
		marginLeft: 6,
		fontSize: 14,
		color: "#64748B",
	},

	distance: {
		marginLeft: Platform.OS === "android" ? 24 : 32,
		fontSize: 14,
		color: "#94A3B8",
	},
	badges: {
		alignItems: "flex-end",
	},

	statusBadge: {
		backgroundColor: "#ECFDF5",

		paddingHorizontal: 14,
		paddingVertical: 7,

		borderRadius: 14,
	},

	statusText: {
		fontSize: 12,
		fontWeight: "700",
		color: "#16A34A",
	},

	fullBadge: {
		backgroundColor: "#FEF2F2",
	},

	fullText: {
		color: "#DC2626",
	},

	joinedBadge: {
		marginTop: 8,

		backgroundColor: theme.colors.primary,

		paddingHorizontal: 14,
		paddingVertical: 7,

		borderRadius: 14,
	},

	joinedText: {
		color: "#FFF",
		fontWeight: "700",
		fontSize: 12,
	},

	bottomRow: {
		marginTop: 20,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	players: {
		flexDirection: "row",
		alignItems: "center",
	},

	playersText: {
		marginLeft: 8,

		fontSize: 15,
		fontWeight: "600",

		color: "#374151",
	},

	priceBadge: {
		backgroundColor: "#F5F7FA",

		paddingHorizontal: 14,
		paddingVertical: 8,

		borderRadius: 14,
	},

	price: {
		fontSize: 15,
		fontWeight: "700",
		color: theme.colors.textPrimary,
	},
	progressTrack: {
		height: 8,

		marginTop: 20,

		backgroundColor: "#EEF2F6",

		borderRadius: 999,

		overflow: "hidden",
	},

	progress: {
		height: 8,

		borderRadius: 999,

		backgroundColor: theme.colors.primary,
	},

	footer: {
		marginTop: 14,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	spots: {
		fontSize: 14,
		fontWeight: "600",
		color: theme.colors.primary,
	},
});
