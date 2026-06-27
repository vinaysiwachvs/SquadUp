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

import {
	Bell,
	ChevronLeft,
	ChevronRight,
	LogOut,
	Lock,
	MapPin,
	Shield,
	User,
} from "lucide-react-native";

import Slider from "@react-native-community/slider";
import theme from "../../constants/theme";
import user from "../../constants/user";

interface SettingsScreenProps {
	onClose?: () => void;
}

export default function SettingsScreen({ onClose }: SettingsScreenProps) {
	const [name, setName] = useState(user.profile.name);
	const [email, setEmail] = useState(user.profile.email);
	const [bio, setBio] = useState(user.profile.bio);

	const [radius, setRadius] = useState(
		user.settings.searchRadius.defaultValue,
	);

	const [pushEnabled, setPushEnabled] = useState(
		user.settings.notifications.push,
	);
	const [emailEnabled, setEmailEnabled] = useState(
		user.settings.notifications.email,
	);
	const [publicProfile, setPublicProfile] = useState(
		user.settings.privacy.publicProfile,
	);
	const [hideDistance, setHideDistance] = useState(
		user.settings.privacy.hideDistance,
	);

	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps='handled'
				contentInsetAdjustmentBehavior='automatic'
				contentContainerStyle={styles.content}>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={onClose}
						style={styles.iconButton}>
						<ChevronLeft
							size={22}
							color={theme.colors.textPrimary}
						/>
					</TouchableOpacity>

					<Text style={styles.heading}>Settings</Text>

					<View style={{ width: 46 }} />
				</View>

				{/* Account */}
				<View style={styles.card}>
					<View style={styles.cardHeader}>
						<User size={18} color={theme.colors.primary} />

						<Text style={styles.cardTitle}>Account</Text>
					</View>

					<Text style={styles.fieldLabel}>Name</Text>
					<TextInput
						value={name}
						onChangeText={setName}
						placeholder='Full Name'
						placeholderTextColor='#9CA3AF'
						style={styles.input}
					/>

					<Text style={styles.fieldLabel}>Email</Text>
					<TextInput
						value={email}
						onChangeText={setEmail}
						placeholder='Email'
						placeholderTextColor='#9CA3AF'
						style={styles.input}
					/>

					<Text style={styles.fieldLabel}>Bio</Text>
					<TextInput
						value={bio}
						onChangeText={setBio}
						multiline
						placeholder='Bio'
						placeholderTextColor='#9CA3AF'
						style={styles.bioInput}
					/>
				</View>
				{/* Preferences */}
				<View style={styles.card}>
					<View style={styles.cardHeader}>
						<MapPin size={18} color={theme.colors.primary} />
						<Text style={styles.cardTitle}>Preferences</Text>
					</View>
					<View style={styles.radiusRow}>
						<View style={styles.settingRow}>
							<Text style={styles.settingTitle}>
								Search Radius
							</Text>
						</View>
						<View>
							<Text style={styles.radiusValue}>{radius} km</Text>
						</View>
					</View>
					<Slider
						minimumValue={1}
						maximumValue={25}
						step={1}
						value={radius}
						onValueChange={(value) => setRadius(value)}
						minimumTrackTintColor={theme.colors.primary}
						thumbTintColor={theme.colors.primary}
					/>
				</View>
				{/* Notifications */}
				<View style={styles.card}>
					<View style={styles.cardHeader}>
						<Bell size={18} color={theme.colors.primary} />

						<Text style={styles.cardTitle}>Notifications</Text>
					</View>

					<View style={styles.settingRow}>
						<Text style={styles.settingTitle}>
							Push Notifications
						</Text>

						<Switch
							value={pushEnabled}
							onValueChange={setPushEnabled}
							trackColor={{
								false: "#E5E7EB",
								true: theme.colors.primary,
							}}
						/>
					</View>

					<View style={styles.settingRow}>
						<Text style={styles.settingTitle}>Email Updates</Text>

						<Switch
							value={emailEnabled}
							onValueChange={setEmailEnabled}
							trackColor={{
								false: "#E5E7EB",
								true: theme.colors.primary,
							}}
						/>
					</View>
				</View>
				{/* Privacy */}
				<View style={styles.card}>
					<View style={styles.cardHeader}>
						<Shield size={18} color={theme.colors.primary} />

						<Text style={styles.cardTitle}>Privacy</Text>
					</View>

					<View style={styles.settingRow}>
						<Text style={styles.settingTitle}>Public Profile</Text>

						<Switch
							value={publicProfile}
							onValueChange={setPublicProfile}
							trackColor={{
								false: "#E5E7EB",
								true: theme.colors.primary,
							}}
						/>
					</View>

					<View style={styles.settingRow}>
						<Text style={styles.settingTitle}>Hide Distance</Text>

						<Switch
							value={hideDistance}
							onValueChange={setHideDistance}
							trackColor={{
								false: "#E5E7EB",
								true: theme.colors.primary,
							}}
						/>
					</View>

					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.menuRow}>
						<View style={styles.menuLeft}>
							<Lock size={18} color='#64748B' />

							<Text style={styles.menuText}>Blocked Users</Text>
						</View>

						<ChevronRight size={20} color='#94A3B8' />
					</TouchableOpacity>
				</View>
				<TouchableOpacity activeOpacity={0.9} style={styles.saveButton}>
					<Text style={styles.saveButtonText}>Save Changes</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					style={styles.logoutButton}>
					<LogOut size={20} color='#DC2626' />

					<Text style={styles.logoutButtonText}>Sign Out</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4F7F9",
	},

	content: {
		flexGrow: 1,
		paddingHorizontal: 20,
		paddingTop: 10,
		paddingBottom: 40,
	},

	scrollView: {
		flex: 1,
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 28,
	},

	iconButton: {
		width: 46,
		height: 46,
		borderRadius: 23,
		backgroundColor: "#FFF",
		alignItems: "center",
		justifyContent: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.06,
		shadowRadius: 10,

		elevation: 4,
	},

	heading: {
		fontSize: 28,
		fontWeight: "700",
		color: "#111827",
	},

	card: {
		backgroundColor: "#FFF",
		borderRadius: 24,
		padding: 20,
		marginBottom: 18,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.05,
		shadowRadius: 12,

		elevation: 3,
	},

	cardHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
	},

	cardTitle: {
		fontSize: 18,
		fontWeight: "700",
		color: "#111827",
		marginLeft: 10,
	},

	fieldLabel: {
		fontSize: 14,
		fontWeight: "600",
		color: "#374151",
		marginBottom: 8,
	},

	input: {
		backgroundColor: "#F8FAFB",
		borderRadius: 16,
		paddingHorizontal: 18,
		paddingVertical: 15,
		fontSize: 15,
		color: "#111827",
		marginBottom: 14,
	},

	bioInput: {
		backgroundColor: "#F8FAFB",
		borderRadius: 16,
		paddingHorizontal: 18,
		paddingTop: 16,
		minHeight: 110,
		textAlignVertical: "top",
		color: "#111827",
	},

	radiusRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
		alignItems: "center",
	},

	radiusValue: {
		fontSize: 16,
		color: theme.colors.primary,
		fontWeight: "700",
	},

	settingRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 14,
	},

	settingTitle: {
		fontSize: 15,
		color: "#374151",
		fontWeight: "500",
	},

	menuRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 18,
		borderTopWidth: 1,
		borderTopColor: "#F1F5F9",
	},

	menuLeft: {
		flexDirection: "row",
		alignItems: "center",
	},

	menuText: {
		fontSize: 15,
		color: "#374151",
		marginLeft: 14,
		fontWeight: "500",
	},

	saveButton: {
		height: 58,
		borderRadius: 18,
		backgroundColor: theme.colors.primary,

		alignItems: "center",
		justifyContent: "center",

		marginTop: 12,

		shadowColor: theme.colors.primary,
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.22,
		shadowRadius: 14,

		elevation: 6,
	},

	saveButtonText: {
		color: "#FFF",
		fontSize: 17,
		fontWeight: "700",
	},

	logoutButton: {
		height: 58,

		marginTop: 16,

		borderRadius: 18,

		backgroundColor: "#FFF5F5",

		borderWidth: 1,
		borderColor: "#FECACA",

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",

		shadowColor: "#DC2626",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.08,
		shadowRadius: 12,

		elevation: 3,
	},

	logoutButtonText: {
		marginLeft: 10,
		fontSize: 16,
		fontWeight: "700",
		color: "#DC2626",
		letterSpacing: 0.3,
	},
});
