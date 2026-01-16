import React, { useState } from "react";
import "./TeamModal.css";
import { matchData } from "../data/matches";
import { teams } from "../data/teams";

export default function TeamModal({ team, close }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const teamObj = teams.find((t) => t.name === team);
  const logo = teamObj.logo;

  let matches = matchData[team] || [];

  if (filter === "home") matches = matches.filter((m) => m.home);
  if (filter === "away") matches = matches.filter((m) => !m.home);

  matches = matches.filter((m) =>
    m.opponent.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box animate-pop" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <img src={logo} className="modal-team-logo" />
          <h2>{team} — Matches 2025</h2>
        </div>

        <input
          type="text"
          placeholder="Search opponent..."
          className="modal-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="modal-filters">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "home" ? "active" : ""} onClick={() => setFilter("home")}>Home</button>
          <button className={filter === "away" ? "active" : ""} onClick={() => setFilter("away")}>Away</button>
        </div>

        <div className="match-list">
          {matches.map((m, i) => (
            <div className="match-card" key={i}>
              <h3>Match #{m.no}</h3>
              <p><strong>Date:</strong> {m.date}</p>
              <p><strong>Opponent:</strong> {m.opponent}</p>
              <p><strong>Stadium:</strong> {m.stadium}</p>
              <p><strong>Time:</strong> {m.time}</p>

              <span className={m.home ? "badge home-badge" : "badge away-badge"}>
                {m.home ? "Home" : "Away"}
              </span>
            </div>
          ))}

          {matches.length === 0 && <p className="no-matches">No matches found.</p>}
        </div>

        <button className="close-btn" onClick={close}>Close</button>
      </div>
    </div>
  );
}
