import React from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
// Use a plain View fallback to avoid native module warnings for ExpoBlur
import { Compass, House, MessageCircle, Plus, User } from "lucide-react-native";
import theme from "../constants/theme";

export type NavigationMenuTabKey =
	| "home"
	| "discover"
	| "create"
	| "chat"
	| "profile";

const tabs = [
	{ key: "home", title: "Home", Icon: House },
	{ key: "discover", title: "Discover", Icon: Compass },
	{ key: "create", title: "", Icon: Plus },
	{ key: "chat", title: "Chat", Icon: MessageCircle },
	{ key: "profile", title: "Profile", Icon: User },
];

interface NavigationMenuProps {
	activeTab: NavigationMenuTabKey;
	onTabPress: (tab: NavigationMenuTabKey) => void;
}

export default function NavigationMenu({
	activeTab,
	onTabPress,
}: NavigationMenuProps) {
	return (
		<View style={styles.wrapper}>
			<View style={styles.tabBar}>
				<View style={styles.row}>
					{tabs
						.filter((tab) => tab.key !== "create")
						.map((tab, index) => {
							const Icon = tab.Icon;
							const isActive = activeTab === tab.key;

							return (
								<TouchableOpacity
									key={tab.key}
									activeOpacity={0.8}
									style={[
										styles.tab,
										index === 1 && { marginRight: 34 },
										index === 2 && { marginLeft: 34 },
									]}
									onPress={() =>
										onTabPress(
											tab.key as NavigationMenuTabKey,
										)
									}>
									<Icon
										size={24}
										color={
											isActive
												? theme.colors.primary
												: theme.colors.textMuted
										}
									/>

									<Text
										style={[
											styles.label,
											isActive && styles.activeLabel,
										]}>
										{tab.title}
									</Text>
								</TouchableOpacity>
							);
						})}
				</View>
			</View>

			<TouchableOpacity
				activeOpacity={0.85}
				onPress={() => onTabPress("create")}
				style={styles.fab}>
				<Plus color={theme.colors.cardBg} size={34} strokeWidth={2.5} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		bottom: Platform.OS === "ios" ? 28 : 18,
		left: 18,
		right: 18,
		alignItems: "center",
		// iOS shadow: apply on wrapper so rounded inner tabBar can keep overflow:hidden
		shadowColor: "#000",
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowOpacity: 0.35,
		shadowRadius: 18,
		elevation: 14,
	},

	tabBar: {
		width: "100%",
		height: 82,
		borderRadius: 42,
		overflow: "hidden",

		backgroundColor: "rgba(255,255,255,0.82)",

		borderWidth: 1,
		borderColor: "rgba(255,255,255,0.55)",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.08,
		shadowRadius: 20,

		elevation: 14,

		justifyContent: "center",
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		flex: 1,
		paddingHorizontal: 16,
	},

	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	label: {
		marginTop: 5,
		fontSize: 13,
		color: "#9DA3AE",
		fontWeight: "500",
	},

	activeLabel: {
		color: "#18A56F",
		fontWeight: "700",
	},

	fab: {
		position: "absolute",
		top: -15,

		width: 70,
		height: 70,
		borderRadius: 40,

		backgroundColor: "#F15A37",

		alignItems: "center",
		justifyContent: "center",

		borderWidth: 1,
		borderColor: "#FFF",

		shadowColor: "#F15A37",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.35,
		shadowRadius: 18,

		elevation: 18,
	},
});
