import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Toast from '../../components/ui/Toast.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/ui/Loader.jsx';

const SignupForm = () => {
  const [input, setInput] = useState({
    fullname: '',
    username: '',
    email: '',
    password: ''
  })
  const [toast, setToast] = useState({ message: '', type: '', visible: false })
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
        headers: {
          "Content-Type": 'application/json'
        },
        withCredentials: true
      })
      if (res.data.success) {
        navigate('/login')
        setToast({ message: res.data.message, type: 'success', visible: true })
        setInput({
          fullname: '',
          username: '',
          email: '',
          password: ''
        })
      }
    } catch (error) {
      console.log(error)
      setToast({ message: error.response?.data?.message || 'Something went wrong!', type: 'error', visible: true });
    } finally {
      setLoading(false)
    }
  }
  const handleCloseToast = () => {
    setToast({ ...toast, visible: false });
  };
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        handleCloseToast();
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [toast.visible]);
  return (
    <div className="flex min-h-screen flex-col justify-start items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-52 w-auto" src="/file.png" alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for an account</h2>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-4">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={signupHandler} className="space-y-6" action="#" method="POST">
            <div>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                placeholder="Full Name"
                value={input.fullname}
                onChange={changeEventHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                 sm:leading-6"
              />
            </div>

            {/* <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username"
                value={input.username}
                onChange={changeEventHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                 sm:leading-6"
              />
            </div> */}

            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                value={input.email}
                onChange={changeEventHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                 sm:leading-6"
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={input.password}
                onChange={changeEventHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                 sm:leading-6"
              />
            </div>

            <div className="flex justify-center">
                {loading ? (
                    <Loader /> // Loader will be displayed here when loading
                ) : (
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign up
                    </button>
                )}
            </div>

            <div className="flex items-center justify-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-900">Or sign up with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
          </form>

          <div className="flex flex-col space-y-4 mt-4">
            <button className="flex items-center justify-center w-full  py-2 px-4  ">
              <img src="./Google_processed.png" alt="Google Logo" className="h-5 w-5 mr-2" />
              <span className="text-indigo-700 font-semibold">Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-6">
        <p className="mt-3 text-center text-sm text-gray-500">
          Already a member?
          <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1">Sign in to your account</Link>
        </p>
        
      </div>
      {toast.visible && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

    </div>
  );
}

export default SignupForm;
