import React from "react";
import { Link } from "@reach/router";
import { TaskRow } from "./TaskRow";
import { Util } from "./utils";
import DataContext from "./DataContext"

const util = Util();

export const TaskDetails = ({ groupName }) => {
  const taskList = React.useContext(DataContext)
  const [tasks, setTasks] = React.useState(
    util.getTasksByGroupName(taskList, groupName)
  );

  const handleClick = task => {
    const newTasks = [...tasks];
    const updatedTask = newTasks.find(item => item.id === task.id);
    updatedTask["completedAt"] = Date.now();
    setTasks(newTasks);
  };

  const setIcon = task => {
    if (util.isTaskLocked(task, taskList)) {
      return "locked.svg";
    } else {
      return task.completedAt ? "completed.svg" : "incomplete.svg";
    }
  };

  return (
    <>
      <h1> {groupName} </h1>
      <Link to="/"> ALL GROUPS </Link>
      <div>
        {tasks.map(task => (
          <TaskRow
            title={task.task}
            key={task.id}
            icon={() => setIcon(task)}
            onClick={() => handleClick(task)}
          />
        ))}
      </div>
    </>
  );
};
