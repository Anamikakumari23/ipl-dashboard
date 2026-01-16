import React from "react";
import Navbar from "../components/Navbar";
import PointsTable from "../components/PointsTable";

export default function PointsTablePage() {
  return (
    <div className="animate-fade">
      <Navbar />
      <PointsTable />
    </div>
  );
}
