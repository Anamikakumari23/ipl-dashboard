import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">

      <div className="nav-left">
        {/* IPL LOGO LEFT CORNER */}
        <Link to="/" className="logo-link">
          <img
            src="/src/assets/logos/ipl.png"
            alt="IPL Logo"
            className="ipl-logo-corner"
          />
        </Link>

        {/* NAV LINKS */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        <Link to="/points" className="nav-link">Points Table</Link>
        <Link to="/players" className="nav-link">Players</Link>
      </div>

      <div className="nav-right">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
