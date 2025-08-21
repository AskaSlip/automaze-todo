import {ITask, ITaskUpdate} from "@/models/ITask";
import axios from "axios";

const apiUrl = 'http://localhost:5000';

const TaskService = {
    createTask: async (data: ITask): Promise<ITask> => {
        try {
            const response = await axios.post(`${apiUrl}/tasks/task`, data);
            return response.data;
        } catch (err) {
            console.error("Error creating task:", err);
            throw new Error("Failed to create task");
        }
    },
    updateTask: async (data: ITaskUpdate, task_id: string): Promise<ITask> => {
        try {
            const response = await axios.patch(`${apiUrl}/tasks/${task_id}`, data);
            return response.data;
        } catch (err) {
            console.error("Error updating task:", err);
            throw new Error("Failed to update task");
        }
    },
    deleteTask: async (task_id: string): Promise<void> => {
        try {
            await axios.delete(`${apiUrl}/tasks/${task_id}`);
        } catch (err) {
            console.error("Error deleting task:", err);
            throw new Error("Failed to delete task");
        }
    },
};

export {TaskService}