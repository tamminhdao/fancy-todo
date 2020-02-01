import React from "react";

export const GroupRow = ({ name, totalTasks, completedTasks }) => {
  return (
    <a href="./">
      <div>
        <img src="../public/group.svg" alt="group_icon"/>
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{`${completedTasks} OF ${totalTasks} COMPLETED`}</h4>
      </div>
    </a>
  )
}
