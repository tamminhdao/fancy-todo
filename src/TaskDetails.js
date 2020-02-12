import React from "react";
import { TaskRow } from "./TaskRow";
import { Util } from "./utils";
import DataContext from "./DataContext";

const util = Util();

export const TaskDetails = props => {
  const taskList = React.useContext(DataContext);
  const [tasks, setTasks] = React.useState(
    util.getTasksByGroupName(taskList, props.groupName)
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
    <div className="content">
      <div className="header">
        <h2> {props.groupName} </h2>
        <div
          className="all-group"
          onClick={() => {
            props.setGroupView(true);
            props.setDetailView(false);
          }}
        >
          ALL GROUPS
        </div>
      </div>
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
    </div>
  );
};
