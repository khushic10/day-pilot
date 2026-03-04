import { StyleSheet, View } from "react-native";
import CalendarView from "../components/CalendarView";
import { COLORS } from "../constants/colors";

export default function CalendarScreen() {
	return (
		<View style={styles.container}>
			<CalendarView />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
});
