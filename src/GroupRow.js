import React from "react";
import { Link } from "@reach/router";

export const GroupRow = ({ name, totalTasks, completedTasks }) => {
  return (
    <Link to={`${name}`} className="flex-container">
      <div className="group-icon flex-item">
        <img src="./group.svg" alt="group_icon" />
      </div>
      <div className="group-details flex-item">
        <h3>{name}</h3>
        <h4>{`${completedTasks} OF ${totalTasks} COMPLETED`}</h4>
      </div>
    </Link>
  );
};
