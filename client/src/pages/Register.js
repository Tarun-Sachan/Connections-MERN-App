import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const registerForm = { name, email, password, rePassword };

    console.log(registerForm);
    setName("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };
  const inputNameHandler = (e) => {
    setName(e.target.value);
  };
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const inputRePasswordHandler = (e) => {
    setRePassword(e.target.value);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline">
          Register
        </h1>
        <form className="mt-6" onSubmit={formSubmitHandler}>
          <div className="mb-2">
            <label
              for="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={inputNameHandler}
              value={name}
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={inputEmailHandler}
              value={email}
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={inputPasswordHandler}
              value={password}
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="password1"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password1"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={inputRePasswordHandler}
              value={rePassword}
              required
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
