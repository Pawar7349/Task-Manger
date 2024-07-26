import './App.css';
import Header from './components/header/Header.jsx';
import Signin from './components/registration/Signin.jsx';
import Signup from './components/registration/Signup.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import Home from './pages/home/Home.jsx';
import TaskManager from './pages/taskmanagement/TaskManager.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import RequireAuth from './utils/RequireAuth.jsx';
import { useSelector } from 'react-redux';

function App() {
	const { auth } = useSelector((state) => ({ ...state }));
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/signin'
						element={!auth.currentUser ? <Signin /> : <Dashboard />}
					/>
					<Route
						path='/signup'
						element={!auth.currentUser ? <Signup /> : <Dashboard />}
					/>
					<Route
						path='/taskmanager'
						element={
							<RequireAuth>
								<TaskManager />
							</RequireAuth>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
