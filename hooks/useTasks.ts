import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Task } from "../types/task";

const STORAGE_KEY = "TASKS_STORAGE";

export function useTasks() {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		loadTasks();
	}, []);

	useEffect(() => {
		saveTasks();
	}, [tasks]);

	const loadTasks = async () => {
		const data = await AsyncStorage.getItem(STORAGE_KEY);
		if (data) {
			setTasks(JSON.parse(data));
		}
	};

	const saveTasks = async () => {
		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	};

	const addTask = (title: string, date: string) => {
		const newTask: Task = {
			id: Date.now().toString(),
			title,
			date,
		};
		setTasks((prev) => [...prev, newTask]);
	};

	const deleteTask = (id: string) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	return { tasks, addTask, deleteTask };
}
