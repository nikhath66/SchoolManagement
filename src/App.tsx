import React, { useEffect, useState } from "react";
import Loginpage from "./components/Login/Loginpage";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Forget from "./components/Forget/Forget";
import Home1 from "./components/Home/pages/Home1";
import About from "./components/Home/pages/About";
import Faculties from "./components/Home/pages/Faculties/Faculties";
import Student from "./components/Home/pages/Student/Student";
import Add from "./components/Home/pages/Student/pages/Add";
import { firebaseAuth, auth } from "./Firebase/Firebase";

const App = () => {
  const nav = useNavigate();
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(auth, (auth) => {
      if (auth) {
        nav("/Home/home");
      } else {
        nav("/");
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home />}>
          <Route element={<Home1 />} path="/Home/home" />
          <Route element={<About />} path="/Home/about" />
          <Route element={<Faculties />} path="/Home/faculties" />
          <Route element={<Student />} path="/Home/student" />
        </Route>
        <Route path="/Forget" element={<Forget />} />
      </Routes>
    </>
  );
};

export default App;
