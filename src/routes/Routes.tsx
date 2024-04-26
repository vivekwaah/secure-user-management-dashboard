import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route element={<ProtectedRoute />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
