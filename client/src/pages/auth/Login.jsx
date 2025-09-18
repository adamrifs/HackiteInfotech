import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="max-w-md w-full !p-5">
        <h1 className="text-center text-3xl font-bold !mb-5">Login</h1>
        <form action="" className="!space-y-5">
          <div className="flex flex-col">
            <label className="!mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your Email"
              className="border border-white rounded-lg !py-2 !px-4 focus:ring-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="!mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your Password"
              className="border border-white rounded-lg !py-2 !px-4 focus:ring-2 "
            />
          </div>
          <div className="flex flex-col">
            <button className="bg-white !text-black !px-5 !py-2 rounded-lg font-semibold hover:bg-black hover:!text-white hover:border">
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
