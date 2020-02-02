import React from "react"
import { Link } from "@reach/router"
import { TaskRow } from "./TaskRow"
import { Util } from "./utils"

const util = Util()
export const Tasks = (props) => {
  const [tasks, setTasks] = React.useState([])
  React.useEffect(() => {
    const filteredTasks = util.getTasksByGroupName(props.rawData, props.groupName)
    setTasks(filteredTasks)
  }, [])

  return (
    <>
      <h1> { props.groupName } </h1>
      <Link to="/"> ALL GROUPS </Link>
      <div>
        { tasks.map(task => (
          <TaskRow
            title={task.task}
            key={task.id}
          />
        ))}
      </div>
    </>
  )
}
