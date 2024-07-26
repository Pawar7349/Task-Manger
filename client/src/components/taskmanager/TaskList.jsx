import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard.jsx';
import './tasklist.scss';

const TaskList = () => {
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.auth);
	const tasks = useSelector((state) => state.task);

	const { currentUser } = auth;
	const { AllTasks } = tasks;

	useEffect(() => {
		if (currentUser) {
			dispatch(getAllTasks(currentUser.token, currentUser.id));
		}
	}, [dispatch, currentUser]);
   

	// Debug log to check the state of AllTasks
    useEffect(() => {
        console.log('Updated AllTasks:', AllTasks);
    }, [AllTasks]);
	
	return (
		<div>
			<ul className='list-header'>
				<li>
					<h5>Id</h5>
				</li>
				<li>
					<h5>Issue Name</h5>
				</li>
				<li>
					<h5>Status</h5>
				</li>
				<li>
					<h5>Action</h5>
				</li>
			</ul>
			{AllTasks && AllTasks.length > 0 ? (
				AllTasks.map((item) => (
					<ListCard key={item._id} item={item} />
				))
			) : (
				<p>No tasks available</p>
			)}
		</div>
	);
};

export default TaskList;
