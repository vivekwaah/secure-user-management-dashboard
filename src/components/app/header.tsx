import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '../../store/auth/authSlice';
import { RootState } from '../../store/store';

const Header: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { token } = useSelector((state: RootState) => state.auth);

	const handleLogout = () => {
		dispatch(clearToken());
		navigate('/login');
	};

	return (
		<header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
			<h1 className="text-2xl font-bold">{process.env.REACT_APP_APP_NAME}</h1>
			{token ? (
				<button onClick={handleLogout} className="text-sm font-semibold hover:underline">
					Logout
				</button>
			) : (
				<button onClick={() => navigate('/login')} className="text-sm font-semibold hover:underline">
					Login
				</button>
			)}
		</header>
	);
};

export default Header;
