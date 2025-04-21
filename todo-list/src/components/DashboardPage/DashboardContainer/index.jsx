import React, { useContext } from "react";
import "./dashboardContainer.styles.css";
import PieChartComponent from "./Pie";
import { FetchedContext } from "../../../App";

const DashboardContainer = () => {
  const {tasks} = useContext(FetchedContext);

  let completed = tasks.filter(task => task.completed).length;
  let pending = tasks.filter(task => !task.completed).length;

  return (
    <div className="dashboard-container" id="dash-container">
      <div className="dash-heading">
        <h2>Dashboard</h2>
        <p>See your overall Performance</p>
      </div>
      <div className="status-container">
        <div className="total-tasks task-status">
            <h2>{tasks?tasks.length:0}</h2>
            <p>Total Tasks</p>
        </div>
        <div className="pending-tasks task-status">
        <h2>{pending}</h2>
            <p>Pending Tasks</p>
        </div>
        <div className="completed-tasks task-status">
        <h2>{completed}</h2>
            <p>Complete Tasks</p>
        </div>
      </div>
      <h2 className="chart-heading">
        Performance
      </h2>
      <PieChartComponent completed={completed} pending={pending}/>
    </div>
  );
};

export default DashboardContainer;
