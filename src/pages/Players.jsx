import React from "react";
import Navbar from "../components/Navbar";
import { players } from "../data/players";
import { teams } from "../data/teams";
import "./Players.css";

export default function Players() {
  return (
    <div className="animate-fade">
      <Navbar />

      <h1 className="players-title">IPL 2025 Players</h1>

      <div className="players-container">
        {teams.map((team) => (
          <div key={team.short} className="team-card">
            <img src={team.logo} className="team-logo" />
            <h2>{team.name}</h2>

            <div className="players-grid">
              {players[team.short]?.map((p) => {
                const wikiUrl = `https://en.wikipedia.org/wiki/${p.name.replace(
                  / /g,
                  "_"
                )}`;

                return (
                  <div key={p.name} className="player-card">
                    <img src={p.img} className="player-img" />
                    <a href={wikiUrl} target="_blank" className="player-name">
                      {p.name}
                    </a>
                    <p className="player-role">{p.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
