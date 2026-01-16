import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PointsTable from "../components/PointsTable";
import "./Home.css";

import { matchData } from "../data/matches";

// Random match of the day
function getRandomMatch() {
  const allMatches = Object.values(matchData).flat();
  return allMatches[Math.floor(Math.random() * allMatches.length)];
}

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "";
  };

  const motd = getRandomMatch();

  return (
    <div className="home-page animate-fade">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* HEADER */}
      <header className="home-header">
        <h1 className="home-title">IPL 2025 Dashboard</h1>
        <p className="home-subtitle">
          Points, Schedules, Leaderboards & Team Insights
        </p>
      </header>

      {/* MATCH OF THE DAY */}
      <section className="motd">
        <h2>Match of the Day</h2>

        <p>
          <strong>Match #{motd.no}</strong>
        </p>
        <p>
          <strong>Opponent:</strong> {motd.opponent}
        </p>
        <p>
          <strong>Date:</strong> {motd.date}
        </p>
        <p>
          <strong>Time:</strong> {motd.time}
        </p>
        <p>
          <strong>Stadium:</strong> {motd.stadium}
        </p>
      </section>

      {/* POINTS TABLE */}
      <PointsTable />
    </div>
  );
}
