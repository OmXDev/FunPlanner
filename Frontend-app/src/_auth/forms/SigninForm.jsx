import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Toast from '../../components/ui/Toast.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../../redux/authSlice.js';

const SigninForm = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [toast, setToast] = useState({ message: '', type: '', visible: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/api/v1/user/login', input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setAuthUser(res.data.user))
        setToast({ message: res.data.message, type: 'success', visible: true });
        navigate('/');
        setInput({
          email: '',
          password: ''
        });
      }
    } catch (error) {
      console.log(error);
      setToast({ message: error.response?.data?.message || 'Something went wrong!', type: 'error', visible: true });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, visible: false });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        handleCloseToast();
      }, 3000); // Close the toast after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [toast.visible]);

  return (
    <div className="flex min-h-screen flex-col justify-start items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-52 w-auto" src="/file.png" alt="Fun Planner" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-4">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center mb-12 text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

          <form onSubmit={signinHandler} className="space-y-6" action="#" method="POST">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                value={input.email}
                onChange={changeEventHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={input.password}
                onChange={changeEventHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="flex justify-center">
              {loading ? (
                <Loader /> // Loader component when loading
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              )}
            </div>

            <div className="flex items-center justify-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-900">Or </span>
              <hr className="flex-grow border-gray-300" />
            </div>
          </form>

          {/* <div className="flex flex-col space-y-4 mt-4">
            <button className="flex items-center justify-center w-full py-2 px-4">
              <img src="./Google_processed.png" alt="Google Logo" className="h-5 w-5 mr-2" />
              <span className="text-white font-semibold">Sign in with Google</span>
            </button>
          </div> */}

          <div className="mt-2 flex items-center justify-center">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-6">
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1">
            Create an account today
          </Link>
        </p>
      </div>
      {toast.visible && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}
    </div>
  );
};

export default SigninForm;
