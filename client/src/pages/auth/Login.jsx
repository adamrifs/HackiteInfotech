import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/admin/adminLogin', { email, password }, { withCredentials: true })
      if (response.data.token) {
        Cookies.set('jwt', response.data.token, { expires: 5 })
        setToken(response.data.token)
      }
      toast.success('Login succesfull')
      console.log(response.data)
      nav('/admin')

    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message)
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <ToastContainer />
      <div className="max-w-md w-full !p-5">
        <h1 className="text-center text-3xl font-bold !mb-5">Login</h1>
        <form action="" onSubmit={handleLogin} className="!space-y-5">
          <div className="flex flex-col">
            <label className="!mb-1">Email</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="border border-white rounded-lg !py-2 !px-4 focus:ring-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="!mb-1">Password</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="border border-white rounded-lg !py-2 !px-4 focus:ring-2 "
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-white !text-black !px-5 !py-2 rounded-lg font-semibold hover:bg-black hover:!text-white hover:border">
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 !mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
