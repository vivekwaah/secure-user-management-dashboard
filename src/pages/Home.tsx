import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8">
        Secure User Management Dashboard
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 text-center px-4">
        Thank you for visiting! We're delighted to have you here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-8">
        <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/register" className="text-indigo-600 font-semibold hover:underline">Register</Link>
      </div>
    </div>
  );
}

export default Home;
