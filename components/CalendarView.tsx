import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS } from "../constants/colors";
import { useTasks } from "../hooks/useTasks";
import AddTaskModal from "./AddTaskModal";
import TaskList from "./TaskList";

export default function CalendarView() {
	const { tasks, addTask, deleteTask } = useTasks();
	const today = new Date();
	const formattedToday = today.toISOString().split("T")[0];
	const [selectedDate, setSelectedDate] = useState(formattedToday);
	const [modalVisible, setModalVisible] = useState(false);

	const markedDates = tasks.reduce((acc: any, task) => {
		acc[task.date] = { marked: true, dotColor: COLORS.primary };
		return acc;
	}, {});

	const filteredTasks = tasks.filter((task) => task.date === selectedDate);

	return (
		<View style={styles.container}>
			<Calendar
				onDayPress={(day) => setSelectedDate(day.dateString)}
				markedDates={{
					...markedDates,
					[selectedDate]: {
						selected: true,
						selectedColor: COLORS.primary,
					},
				}}
			/>

			<TaskList
				tasks={filteredTasks}
				onDelete={deleteTask}
				onAdd={() => setModalVisible(true)}
				isDateSelected={!!selectedDate}
			/>

			<AddTaskModal
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
				onSave={(title) => {
					addTask(title, selectedDate);
					setModalVisible(false);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
