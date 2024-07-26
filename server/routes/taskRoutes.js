import express from 'express';
const router = express.Router();
import taskController from '../controllers/taskController.js'

router.route('/add').post(taskController.addTask);
router.route('/tasks').get(taskController.getAllTasks);
router.route('/edit/:id').put(taskController.editTask);

router
	.route('/:id')
	.put(taskController.statusChange)
	.delete(taskController.deleteTask);

export default router;
