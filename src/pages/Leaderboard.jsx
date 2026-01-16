import React from "react";
import Navbar from "../components/Navbar";

import {
  mostRuns,
  mostWickets,
  bestNRR,
  winningStreak,
} from "../data/leaderboard";

import "./Leaderboard.css";

export default function Leaderboard() {
  return (
    <div className="animate-fade">
      <Navbar />

      <h1 className="lb-title">IPL 2025 Leaderboards</h1>

      <section className="lb-section">
        <h2>🏏 Most Runs</h2>
        {mostRuns.map((p) => (
          <div key={p.player} className="lb-card">
            <strong>{p.player}</strong> ({p.team}) — {p.runs} runs
          </div>
        ))}
      </section>

      <section className="lb-section">
        <h2>🔥 Most Wickets</h2>
        {mostWickets.map((p) => (
          <div key={p.player} className="lb-card">
            <strong>{p.player}</strong> ({p.team}) — {p.wickets} wickets
          </div>
        ))}
      </section>

      <section className="lb-section">
        <h2>📈 Best NRR</h2>
        {bestNRR.map((p) => (
          <div key={p.team} className="lb-card">
            <strong>{p.team}</strong> — {p.nrr}
          </div>
        ))}
      </section>

      <section className="lb-section">
        <h2>⚡ Winning Streak</h2>
        {winningStreak.map((p) => (
          <div key={p.team} className="lb-card">
            <strong>{p.team}</strong> — {p.streak}
          </div>
        ))}
      </section>
    </div>
  );
}
