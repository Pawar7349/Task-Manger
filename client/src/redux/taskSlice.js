import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialTask = localStorage.getItem('task')
	? JSON.parse(localStorage.getItem('task'))
	: null;

const initialState = {
	TaskData: initialTask,
	AllTasks: [],
	error: null,
	isLoading: false,
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
			taskAddedSuccessfully: (state, action) => {
					state.AllTasks.push(action.payload);
					state.isLoading = false;
					state.error = null;
			},
			taskAddFailure: (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
			},
			getAllTaskSuccess: (state, action) => {
					state.AllTasks = action.payload;
					state.isLoading = false;
					state.error = null;
			},
			getAllTaskFailure: (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
			},
			editTaskSuccess: (state, action) => {
					const index = state.AllTasks.findIndex(task => task._id === action.payload._id);
					if (index !== -1) {
							state.AllTasks[index] = action.payload;
					}
					state.isLoading = false;
					state.error = null;
			},
			deleteSuccess: (state, action) => {
					state.AllTasks = state.AllTasks.filter(task => task._id !== action.payload);
					state.isLoading = false;
					state.error = null;
			},
			deleteFailure: (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
			},
	},
});

export const {
	taskAddFailure,
	taskAddedSuccessfully,
	getAllTaskFailure,
	getAllTaskSuccess,
	deleteSuccess,
	deleteFailure,
	editTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task, id) => async (dispatch) => {
	const taskData = { task, id };
	try {
		const response = await axios.post('http://localhost:4000/task/add', taskData);
		if (response.status === 200) {
			localStorage.setItem('task', JSON.stringify(response.data));
			dispatch(taskAddedSuccessfully(response.data));
			toast.success('Task added successfully');
		} else {
			dispatch(taskAddFailure('Failed to add task'));
			toast.error('Failed to add task');
		}
	} catch (error) {
		dispatch(taskAddFailure(error.message));
		toast.error('Failed to add task');
	}
};

export const getAllTasks = (token, id) => async (dispatch) => {
	const config = {
		headers: { Authorization: `Bearer ${token}` },
		params: { id },
	};

	try {
		const response = await axios.get('http://localhost:4000/task/tasks', config);
		if (response.status === 200) {
			dispatch(getAllTaskSuccess(response.data));
		} else {
			dispatch(getAllTaskFailure('Failed to fetch tasks'));
		}
	} catch (error) {
		dispatch(getAllTaskFailure(error.message));
	}
};

export const arrowClick = (item, string) => async (dispatch) => {
	const taskData = { id: item._id, status: item.status, string };
	try {
		const response = await axios.put(`http://localhost:4000/task/${taskData.id}`, taskData);
		if (response.status === 200) {
			dispatch(editTaskSuccess(response.data));
		} else {
			toast.error('Failed to update task');
		}
	} catch (error) {
		toast.error('Failed to update task');
	}
};

export const deleteItem = (id) => async (dispatch) => {
	try {
			const response = await axios.delete(`http://localhost:4000/task/${id}`);
			if (response.status === 200) {
					dispatch(deleteSuccess(id));
					toast.success('Task deleted successfully');
			} else {
					dispatch(deleteFailure('Failed to delete task'));
					toast.error('Failed to delete task');
			}
	} catch (error) {
			dispatch(deleteFailure(error.message));
			toast.error('Failed to delete task');
	}
};

