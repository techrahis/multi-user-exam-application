import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import InstituteSignin from "./components/InstituteSignin";
import Home from "./components/Home";
import { LoginContextProvider } from "./context/LoginContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="main">
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/message" element={<h1>message</h1>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/institutesignin" element={<InstituteSignin />} />
        </Routes>
        <Footer />
      </LoginContextProvider>
    </div>
  );
}

export default App;
