import React from "react"
import { GroupRow } from "./GroupRow"
export const TaskGroup = ({ groups }) => {

  return (
    <div>
      {
        groups.map(group => (
          <GroupRow
            name={group.name}
            totalTasks={group.totalTasks}
            completedTasks={group.completedTasks}
            key={group.name}
          />
        ))
      }
    </div>
  )
}
