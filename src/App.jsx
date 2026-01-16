import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import TeamPage from "./pages/TeamPage";
import PointsTablePage from "./pages/PointsTablePage";
import Players from "./pages/Players";  // ⬅️ ADD THIS IMPORT

export default function App() {
  return (
    <BrowserRouter>

      {/* ALL ROUTES GO HERE */}
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* LEADERBOARD PAGE */}
        <Route path="/leaderboard" element={<Leaderboard />} />

        {/* POINTS TABLE PAGE */}
        <Route path="/points" element={<PointsTablePage />} />

        {/* TEAM PAGE */}
        <Route path="/team/:short" element={<TeamPage />} />

        {/* ⭐ NEW: PLAYERS PAGE */}
        <Route path="/players" element={<Players />} />

      </Routes>

    </BrowserRouter>
  );
}
