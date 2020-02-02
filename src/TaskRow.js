import React from "react"

export const TaskRow = ({ icon, title }) => {
  return (
    <>
      <img 
        src={icon} 
        alt="status-icon"
        // onClick={}
      />
      <h3>{title}</h3>
    </>
  )
}
