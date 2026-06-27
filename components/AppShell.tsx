import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

interface AppShellProps {
	children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				{children}
				<ExpoStatusBar style='auto' />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f4f5f7",
	},
});
