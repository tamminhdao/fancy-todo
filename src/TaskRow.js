import React from "react";

export const TaskRow = ({ icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="flex-container">
      <img className="flex-item"
        src={icon()}
        alt={icon()}
      />
      <h3
        className="flex-item"
        style={
          { textDecoration: (icon() === "completed.svg") ? "line-through" : "",
            color: (icon() === "locked.svg") ? "gray" : "#333"
          }
        }
      >
        {title}
      </h3>
    </div>
  );
};
