// Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import LineChartComponent from "../Charts/Line";
import PieChartComponent from "../Charts/Pie";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card_row">
        <div className="card">
          <h2 className="card-title">Completed tasks</h2>
          <div className="number">5</div>
        </div>
        <div className="card">
          <h2 className="card-title">Incomplete tasks</h2>
          <div className="number">7</div>
        </div>
        <div className="card">
          <h2 className="card-title">Overdue tasks</h2>
          <div className="number">3</div>
        </div>
        <div className="card">
          <h2 className="card-title">Total tasks</h2>
          <div className="number">15</div>
        </div>
      </div>
      <div className="charts_container">
        <div className="chart">
          <h2 className="chart-title">Line Graph</h2>
          <LineChartComponent/>
        </div>
        <div className="chart">
          <h2 className="chart-title">Pie Chart</h2>
          <PieChartComponent/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
