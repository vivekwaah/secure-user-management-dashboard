import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getUserData } from '../services/api';
import { setUser } from '../store/auth/authSlice';
import Swal from 'sweetalert2'

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserData(4);
        dispatch(setUser(userDetails.data));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'Failed to fetch user details:',
        });
      }
    };

    fetchUserDetails();
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h3 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8">User Details</h3>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Name</h2>
          <p className="text-lg text-gray-900">{userInfo?.data?.first_name} {userInfo?.data?.last_name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-lg text-gray-900">{userInfo?.data?.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Avatar</h2>
          {userInfo?.data?.avatar && (
            <img src={userInfo.data.avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
