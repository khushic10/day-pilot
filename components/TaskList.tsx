import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { Task } from "../types/task";

interface Props {
	tasks: Task[];
	onDelete: (id: string) => void;
	onAdd: () => void;
	isDateSelected: boolean;
}

export default function TaskList({
	tasks,
	onDelete,
	onAdd,
	isDateSelected,
}: Props) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.addButton, !isDateSelected && styles.disabledButton]}
				onPress={isDateSelected ? onAdd : undefined}
				disabled={!isDateSelected}
			>
				<Text style={{ color: "white" }}>+ Add Task</Text>
			</TouchableOpacity>

			{!isDateSelected && (
				<Text style={styles.helperText}>Please select a date first</Text>
			)}

			{tasks.map((task) => (
				<View key={task.id} style={styles.taskItem}>
					<Text>{task.title}</Text>
					<TouchableOpacity onPress={() => onDelete(task.id)}>
						<Text style={{ color: COLORS.danger }}>Delete</Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { padding: 20 },

	addButton: {
		backgroundColor: COLORS.primary,
		padding: 10,
		borderRadius: 8,
		alignSelf: "flex-end",
		marginBottom: 10,
	},

	disabledButton: {
		backgroundColor: "#9CA3AF",
	},

	helperText: {
		marginBottom: 10,
		color: "#6B7280",
	},

	taskItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 12,
		backgroundColor: COLORS.card,
		borderRadius: 8,
		marginBottom: 10,
	},
});
