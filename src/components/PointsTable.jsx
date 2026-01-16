import React, { useState } from "react";
import "./PointsTable.css";
import { teams } from "../data/teams";
import TeamModal from "./TeamModal";

export default function PointsTable() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("points");
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Sorting logic
  const sorted = [...teams].sort((a, b) => {
    if (sortField === "points") return b.points - a.points;
    if (sortField === "won") return b.won - a.won;

    // NRR compare safely
    return parseFloat(b.nrr) - parseFloat(a.nrr);
  });

  // Search
  const filtered = sorted.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-wrapper">
      <h1 className="title">IPL 2025 Points Table</h1>

      <input
        type="text"
        placeholder="Search team..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="sorting">
        <button onClick={() => setSortField("points")}>Sort by Points</button>
        <button onClick={() => setSortField("won")}>Sort by Wins</button>
        <button onClick={() => setSortField("nrr")}>Sort by NRR</button>
      </div>

      <table className="points-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>NRR</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((team, i) => (
            <tr
              key={team.id}
              onClick={() => setSelectedTeam(team.name)}
              className="clickable-row"
            >
              <td>{i + 1}</td>

              <td className="team-cell">
                <img src={team.logo} className="team-logo" />
                {team.name}
              </td>

              <td>{team.matches}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.nrr}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTeam && (
        <TeamModal team={selectedTeam} close={() => setSelectedTeam(null)} />
      )}
    </div>
  );
}
