import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AddCard from "./AddCard";
import CardDetails from "./CardDetails";
import SettingPage from "./SettingPage";
import NavBar from "../components/NavBar";

export default function PagesRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/addCard" element={<AddCard />}></Route>
        <Route path="/cardDetail/:id" element={<CardDetails />}></Route>
        <Route path="/setting" element={<SettingPage />}></Route>
      </Routes>
    </Router>
  );
}
