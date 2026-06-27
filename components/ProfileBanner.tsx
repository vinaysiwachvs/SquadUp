import React from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Settings } from "lucide-react-native";
import theme from "../constants/theme";

function hexToRgba(hex: string, alpha = 1) {
	const clean = hex.replace("#", "");
	const r = parseInt(clean.substring(0, 2), 16);
	const g = parseInt(clean.substring(2, 4), 16);
	const b = parseInt(clean.substring(4, 6), 16);
	return `rgba(${r},${g},${b},${alpha})`;
}

function darken(hex: string, percent = 0.08) {
	const clean = hex.replace("#", "");
	const r = Math.max(
		0,
		Math.floor(parseInt(clean.substring(0, 2), 16) * (1 - percent)),
	);
	const g = Math.max(
		0,
		Math.floor(parseInt(clean.substring(2, 4), 16) * (1 - percent)),
	);
	const b = Math.max(
		0,
		Math.floor(parseInt(clean.substring(4, 6), 16) * (1 - percent)),
	);
	return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

interface ProfileBannerProps {
	onSettingsPress?: () => void;
}

export default function ProfileBanner({ onSettingsPress }: ProfileBannerProps) {
	return (
		<LinearGradient
			colors={[theme.colors.primary, darken(theme.colors.primary, 0.08)]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.banner}>
			{/* Decorative Background */}
			<View style={styles.circleLarge} />
			<View style={styles.circleMedium} />
			<View style={styles.circleSmall} />

			<TouchableOpacity
				activeOpacity={0.85}
				onPress={onSettingsPress}
				style={styles.settingsButton}>
				<Settings
					color={theme.colors.cardBg}
					size={26}
					strokeWidth={2.2}
				/>
			</TouchableOpacity>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	banner: {
		width: "100%",
		height: 135,

		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		overflow: "hidden",

		paddingHorizontal: 0,
		paddingTop: Platform.OS === "ios" ? 56 : 38,

		justifyContent: "flex-start",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.12,
		shadowRadius: 20,

		elevation: 10,
	},

	settingsButton: {
		position: "absolute",
		top: 17,
		right: 17,

		width: Platform.OS === "ios" ? 56 : 60,
		height: Platform.OS === "ios" ? 56 : 60,
		borderRadius: 28,

		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "rgba(255,255,255,0.18)",

		borderWidth: 1,
		borderColor: "rgba(255,255,255,0.25)",

		shadowColor: "#a3a3a3",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.12,
		shadowRadius: 16,

		elevation: 8,
	},

	circleLarge: {
		position: "absolute",
		right: -70,
		top: -40,

		width: 250,
		height: 250,
		borderRadius: 125,

		backgroundColor: hexToRgba(theme.colors.cardBg, 0.1),
	},

	circleMedium: {
		position: "absolute",
		right: 55,
		top: 70,

		width: 95,
		height: 95,
		borderRadius: 48,

		backgroundColor: hexToRgba(theme.colors.cardBg, 0.1),
	},

	circleSmall: {
		position: "absolute",
		right: 18,
		top: 40,

		width: 82,
		height: 82,
		borderRadius: 41,

		backgroundColor: hexToRgba(theme.colors.cardBg, 0.14),
	},
});
