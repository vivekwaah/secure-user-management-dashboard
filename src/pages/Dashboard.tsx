import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getUserData } from '../services/api';
import { clearToken, setUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserData(4);
        dispatch(setUser(userDetails.data));
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUserDetails();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');

  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">{process.env.REACT_APP_APP_NAME}</h1>
        <button onClick={handleLogout} className="text-sm font-semibold hover:underline">
          Logout
        </button>
      </header>
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8">User Details</h1>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-gray-900">{userInfo?.data?.first_name} {userInfo?.data?.last_name}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-gray-900">{userInfo?.data?.email}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            {userInfo?.data?.avatar && (
              <img src={userInfo.data.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
            )}
          </div>
          {/* Add more user details as needed */}
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
