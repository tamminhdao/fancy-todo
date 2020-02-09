import React from "react";
import { GroupRow } from "./GroupRow";
import { Util } from "./utils";
import DataContext from "./DataContext"

const util = Util();

export const TaskGroup = () => {
  const [groups, setGroup] = React.useState([]);
  const data = React.useContext(DataContext);

  React.useEffect(() => {
    const grouppedData = util.sortTasksByGroup(data);
    const groupSummary = util.groupSummary(grouppedData);
    setGroup(groupSummary);
  }, []);

  return (
    <div>
      <h3>Things To Do</h3>
      {groups.map(group => (
        <GroupRow
          name={group.name}
          totalTasks={group.totalTasks}
          completedTasks={group.completedTasks}
          key={group.name}
        />
      ))}
    </div>
  );
};
