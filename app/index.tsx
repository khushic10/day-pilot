import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../constants/colors";

export default function Home() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Day Pilot</Text>
				<Text style={styles.subtitle}>
					Organize your life. Plan smarter. Stay productive.
				</Text>

				<View style={styles.card}>
					<View style={styles.cardItem}>
						<MaterialIcons name="event-note" size={28} color={COLORS.primary} />
						<View style={styles.cardTextContainer}>
							<Text style={styles.cardTitle}>Smart Scheduling</Text>
							<Text style={styles.cardText}>
								Add tasks directly to specific dates and track them easily.
							</Text>
						</View>
					</View>

					<View style={styles.cardItem}>
						<FontAwesome5 name="tasks" size={28} color={COLORS.primary} />
						<View style={styles.cardTextContainer}>
							<Text style={styles.cardTitle}>Stay Organized</Text>
							<Text style={styles.cardText}>
								Visual calendar markers help you see busy days instantly.
							</Text>
						</View>
					</View>

					<View style={styles.cardItem}>
						<Feather name="save" size={28} color={COLORS.primary} />
						<View style={styles.cardTextContainer}>
							<Text style={styles.cardTitle}>Auto Save</Text>
							<Text style={styles.cardText}>
								Your tasks are safely stored and never disappear.
							</Text>
						</View>
					</View>
				</View>

				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.8}
					onPress={() => router.push("/calendar")}
				>
					<Text style={styles.buttonText}>Open Calendar</Text>
				</TouchableOpacity>

				<Text style={styles.footerText}>Start planning your day today.</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},

	content: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
	},

	title: {
		fontSize: 38,
		fontWeight: "bold",
		textAlign: "center",
		color: COLORS.primary,
		marginBottom: 8,
	},

	subtitle: {
		fontSize: 16,
		textAlign: "center",
		color: "#6B7280",
		marginBottom: 30,
	},

	card: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 20,
		marginBottom: 40,
		shadowColor: "#000",
		shadowOpacity: 0.12,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 5 },
		elevation: 6,
	},

	cardItem: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 20,
	},

	cardTextContainer: {
		marginLeft: 12,
		flex: 1,
	},

	cardTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 4,
		color: "#111827",
	},

	cardText: {
		fontSize: 14,
		color: "#6B7280",
	},

	button: {
		backgroundColor: COLORS.primary,
		paddingVertical: 16,
		borderRadius: 16,
		alignItems: "center",
		shadowColor: COLORS.primary,
		shadowOpacity: 0.35,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 5 },
		elevation: 6,
	},

	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},

	footerText: {
		marginTop: 20,
		textAlign: "center",
		color: "#9CA3AF",
		fontSize: 14,
	},
});
