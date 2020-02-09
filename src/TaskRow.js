import React from "react"

export const TaskRow = ({ icon, title, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={icon()} 
        alt={icon()}
      />
      <h3>{title}</h3>
    </div>
  )
}
