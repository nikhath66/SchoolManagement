import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";

const HomeContent = () => {
  const nav = useNavigate();
  const location = useLocation();

  console.log(location);
  const path = location.pathname.toLowerCase();

  return (
    <div className="HomeContent-page">
      <div className="Side-Navbar">
        <div
          className={`items ${path === "/home/home" ? "item-selected" : ""}`}
          onClick={() => nav("/home/home")}
        >
          Home
        </div>
        <div
          className={`items ${path === "/home/about" ? "item-selected" : ""}`}
          onClick={() => nav("/home/about")}
        >
          About
        </div>
        <div
          className={`items ${
            path === "/home/faculties" ? "item-selected" : ""
          }`}
          onClick={() => nav("/home/faculties")}
        >
          Faculties
        </div>
        <div
          className={`items ${path === "/home/student" ? "item-selected" : ""}`}
          onClick={() => nav("/home/student")}
        >
          Student
        </div>
      </div>
      <div className="description-content ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeContent;
