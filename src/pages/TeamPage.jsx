import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./TeamPage.css";
import { teams } from "../data/teams";

export default function TeamPage() {
  const { short } = useParams();
  const team = teams.find((t) => t.short === short);

  return (
    <div className="animate-fade">
      <Navbar />

      <div className="team-header">
        <img src={team.logo} className="team-page-logo" />
        <h1>{team.name}</h1>
      </div>

      <div className="team-stats">
        <p><strong>Matches:</strong> {team.matches}</p>
        <p><strong>Wins:</strong> {team.won}</p>
        <p><strong>Losses:</strong> {team.lost}</p>
        <p><strong>NRR:</strong> {team.nrr}</p>
        <p><strong>Points:</strong> {team.points}</p>
      </div>
    </div>
  );
}
