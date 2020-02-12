import React from "react";

export const GroupRow = ({ name, totalTasks, completedTasks, handleClick }) => {
  return (
    <div className="flex-container" onClick={handleClick}>
      <div className="group-icon flex-item">
        <img src="./group.svg" alt="group_icon" />
      </div>
      <div className="group-details flex-item">
        <h3>{name}</h3>
        <h4>{`${completedTasks} OF ${totalTasks} COMPLETED`}</h4>
      </div>
    </div>
  );
};
