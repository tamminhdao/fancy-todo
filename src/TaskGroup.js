import React from "react"
import { GroupRow } from "./GroupRow"
import { Util } from "./utils"

const util = Util()
export const TaskGroup = ({ rawData }) => {
  const [groups, setGroup] = React.useState([])

  React.useEffect(() => {
    const grouppedData = util.sortTasksByGroup(rawData)
    const groupSummary = util.groupSummary(grouppedData)
    setGroup(groupSummary)
  }, [])

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
