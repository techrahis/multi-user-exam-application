import React from "react";
import "./App";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import InstituteSignin from "./components/Institute/InstituteSignin";
import Home from "./components/Home";
import { LoginContextProvider } from "./context/LoginContext";
import Dashboard from "./components/Dashboard";
import SetExam from "./components/Exam/SetExam";

function App() {
  return (
    <div className="main">
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/message"
            element={<h1>Notification funtion will be in the spring II</h1>}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/institutesignin" element={<InstituteSignin />} />
          <Route path="/setexam" element={<SetExam />} />
        </Routes>
        <Footer />
      </LoginContextProvider>
    </div>
  );
}

export default App;
