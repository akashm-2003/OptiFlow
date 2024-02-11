import React from "react";
import BarGraph from "../Charts/Bar";
import TreeMapGraph from "../Charts/Tree";
import ComposedResponsiveContainer from "../Charts/Composed";
import AreaResponsiveContainer from "../Charts/Area";
import { Header } from "../../components";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Analytics" title="Visualisations" />
      <div className="chart-container1">
        <div className="chart">
          <h2 className="chart-title">Area Chart</h2>
          <AreaResponsiveContainer />
        </div>
        <div className="chart">
          <h2 className="chart-title">Bar Graph</h2>
          <BarGraph />
        </div>
      </div>
      <div className="chart-container1">
        <div className="chart">
          <h2 className="chart-title">Composed Chart</h2>
          <ComposedResponsiveContainer />
        </div>
        <div className="chart">
          <h2 className="chart-title">Tree Chart</h2>
          <TreeMapGraph />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
