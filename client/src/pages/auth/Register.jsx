import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import serverUrl from "urls";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${serverUrl}/api/admin/adminRegister`, { name, email, password })
      toast('signup succesfull')
      console.log(response.data)
      nav('/login')
    }
    catch (error) {
      console.log(error)
      toast(error.response?.data?.message)
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <ToastContainer />
      <div className="max-w-md w-full !p-5">
        <h1 className="text-center text-3xl font-bold !mb-5">Register</h1>
        <form action="" onSubmit={handleSubmit} className="!space-y-5">
          <div className="flex flex-col">
            <label className="!mb-1">Name</label>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="border border-white rounded-lg !py-2 !px-4 focus:ring-2"
            />
          </div>
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
          Aleady have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
