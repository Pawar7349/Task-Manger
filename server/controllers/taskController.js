// server/controllers/taskController.js
import User from '../../database/models/user.models.js';
import Task from '../../database/models/task.model.js';

export const addTask = async (req, res) => {
    const { task, id } = req.body;

    try {
        if (!task) {
            console.log("Task is missing in the request body");  
            return res.status(400).send('Please enter the task');
        }
        if (task.length < 10) {
            console.log("Task is too short:", task);
            return res.status(400).send('Add a minimum of 10 characters');
        }
        const taskDetail = new Task({
            task,
            createdBy: id,
        });
        await taskDetail.save();
        return res.status(200).send(taskDetail);
    } catch (error) {
        console.error('Error adding task:', error);
        return res.status(400).send('Task addition failed');
    }
};

export const getAllTasks = async (req, res) => {
    const { id } = req.query;
    try {
        const taskList = await Task.find({ createdBy: id });
        return res.status(200).send(taskList);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return res.status(400).send(error.message);
    }
};

export const editTask = async (req, res) => {
    // Implementation needed
};

export const statusChange = async (req, res) => {
    const { id, string } = req.body;

    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send('Task not found');
        }

        const statusChangeMap = {
            right: { backlog: 'todo', todo: 'doing', doing: 'done' },
            left: { done: 'doing', doing: 'todo', todo: 'backlog' }
        };

        const newStatus = statusChangeMap[string][task.status];
        if (newStatus) {
            task.status = newStatus;
            await task.save();
            return res.send(task);
        }

        return res.status(400).send('Invalid status change direction');
    } catch (error) {
        console.error('Error changing status:', error);
        return res.status(400).send('Status change failed');
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Task.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).send('Task not found');
        }
        return res.status(200).send('Task deleted successfully');
    } catch (error) {
        console.error('Error deleting task:', error);
        return res.status(400).send('Delete failed');
    }
};

export default {
    addTask,
    getAllTasks,
    editTask,
    statusChange,
    deleteTask,
};
