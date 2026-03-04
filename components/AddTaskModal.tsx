import { useState } from "react";
import {
	Modal,
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet,
    Text,
} from "react-native";
import { COLORS } from "../constants/colors";

interface Props {
	visible: boolean;
	onClose: () => void;
	onSave: (title: string) => void;
}

export default function AddTaskModal({ visible, onClose, onSave }: Props) {
	const [title, setTitle] = useState("");

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.container}>
				<TextInput
					placeholder="Enter task..."
					value={title}
					onChangeText={setTitle}
					style={styles.input}
				/>

				<TouchableOpacity
					style={styles.saveButton}
					onPress={() => {
						onSave(title);
						setTitle("");
					}}
				>
					<Text style={{ color: "white" }}>Save</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={onClose}>
					<Text style={{ marginTop: 20 }}>Cancel</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	input: {
		borderWidth: 1,
		padding: 12,
		borderRadius: 8,
		marginBottom: 20,
	},
	saveButton: {
		backgroundColor: COLORS.primary,
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
	},
});
