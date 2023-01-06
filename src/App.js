import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
