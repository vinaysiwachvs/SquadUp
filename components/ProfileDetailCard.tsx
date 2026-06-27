import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalendarDays, Trophy, Users } from "lucide-react-native";
import theme from "../constants/theme";

interface StatItem {
	label: string;
	value: string | number;
	icon?: string;
	color?: string;
}

interface ProfileDetailCardProps {
	name: string;
	location: string;
	sportsCount: number;
	bio: string;
	stats: StatItem[];
}

function getInitials(name: string) {
	return name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0].toUpperCase())
		.join("");
}

export default function ProfileDetailCard({
	name,
	location,
	sportsCount,
	bio,
	stats,
}: ProfileDetailCardProps) {
	return (
		<View style={styles.detailCard}>
			<View style={styles.headerRow}>
				<View style={styles.avatarCircle}>
					<Text style={styles.avatarText}>{getInitials(name)}</Text>
				</View>
				<View style={styles.headerContent}>
					<Text style={styles.cardTitle}>{name}</Text>
					<Text style={styles.cardSubtitle}>
						{location} · {sportsCount} sports
					</Text>
				</View>
			</View>
			<Text style={styles.bioText}>{bio}</Text>
			<View style={styles.statsRow}>
				{stats.map((stat, index) => {
					const iconMap = {
						Users,
						Trophy,
						CalendarDays,
					};
					const iconKey =
						stat.icon && stat.icon in iconMap ? stat.icon : "Users";
					const Icon = iconMap[iconKey as keyof typeof iconMap];
					const iconColor = stat.color ?? theme.colors.textMuted;

					return (
						<View
							key={stat.label}
							style={[
								styles.statCard,
								index === stats.length - 1 && {
									marginRight: 0,
								},
							]}>
							<View style={styles.statIconBox}>
								<Icon size={16} color={iconColor} />
							</View>
							<Text style={styles.statValue}>{stat.value}</Text>
							<Text style={styles.statLabel}>{stat.label}</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailCard: {
		backgroundColor: theme.colors.cardBg,
		borderRadius: 24,
		padding: 20,
		marginBottom: 20,
		marginTop: -40,

		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.07,
		shadowRadius: 24,
		elevation: 6,
	},
	headerRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
	},
	avatarCircle: {
		width: 62,
		height: 62,
		borderRadius: 31,
		backgroundColor: theme.colors.primary,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 16,
	},
	avatarText: {
		fontSize: 22,
		fontWeight: "800",
		color: theme.colors.cardBg,
	},
	headerContent: {
		flex: 1,
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: "700",
		color: theme.colors.textPrimary,
		marginBottom: 6,
	},
	cardSubtitle: {
		fontSize: 14,
		color: theme.colors.textMuted,
		marginBottom: 0,
	},
	bioText: {
		fontSize: 14,
		lineHeight: 20,
		color: theme.colors.textMuted,
		marginBottom: 18,
	},
	statsRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	statCard: {
		flex: 1,
		backgroundColor: theme.colors.background,
		borderRadius: 18,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginRight: 10,
		alignItems: "center",
	},
	statIconBox: {
		width: 32,
		height: 32,
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 5,
	},
	statValue: {
		fontSize: 20,
		fontWeight: "700",
		color: theme.colors.textPrimary,
		marginBottom: 4,
	},
	statLabel: {
		fontSize: 13,
		color: theme.colors.textMuted,
		textTransform: "uppercase",
		letterSpacing: 0.5,
	},
});
