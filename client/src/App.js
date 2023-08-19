import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const DUMMY_CONNECTION = [
  { name: "John Doe", company: "Facebook" },
  { name: "James Anderson", company: "TCS" },
  { name: "Rachel", company: "Wipro" },
  { name: "Max Milliman", company: "Walmart" },
  { name: "Abhishek", company: "TCS" },
];

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Dashboard connections={DUMMY_CONNECTION} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
