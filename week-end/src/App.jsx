import React from "react";
import { Routes, Route, Link } from "react-router";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Notfound from "./Notfound";
import Detail from "./Detail";
import Fanart from "./Fanart";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/detail">
          Detail
        </Link>
        <Link className="nav-link" to="/fanart">
          Fanart
        </Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/fanart" element={<Fanart />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
