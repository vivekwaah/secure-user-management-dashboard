import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signUp } from '../services/api';
import { setToken, setUserId } from '../store/auth/authSlice';
import Swal from "sweetalert2";

const Register: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = process.env.REACT_APP_SAMPLE_REQ_USER_EMAIL ?? '';
  const userPassword = process.env.REACT_APP_SAMPLE_REQ_USER_PASSWORD ?? '';
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signUp({
        email,
        password,
      });

      dispatch(setUserId(response.data.id));
      dispatch(setToken(response.data.token));


      if (response.status === 200) {
        navigate('/dashboard');
      } else {
        throw Error('Login Failed')
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to sign up!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto invert"
            src="https://webreinvent.com/images/logo-webreinvent.svg"
            alt="webreinvent"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
              <Link to="/login" className="text-indigo-600 hover:underline">
                Already register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;
