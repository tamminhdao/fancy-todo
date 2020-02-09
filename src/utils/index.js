export const Util = () => {
  const sortTasksByGroup = data => {
    const reducer = (accumulator, object) => {
      let key = object["group"];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(object);
      return accumulator;
    };

    return data.reduce(reducer, {});
  };

  const groupSummary = sortedTasks => {
    const result = Object.keys(sortedTasks).map(groupName => {
      const tasks = sortedTasks[groupName];
      const totalTasks = tasks.length;
      const reducer = (total, current) => {
        if (current.completedAt) {
          return (total += 1);
        } else {
          return total;
        }
      };
      const completedTasks = tasks.reduce(reducer, 0);
      return {
        name: groupName,
        totalTasks: totalTasks,
        completedTasks: completedTasks
      };
    });
    return result;
  };

  const getTasksByGroupName = (tasklist, groupName) => {
    return tasklist.filter(task => task["group"] === groupName);
  };

  const isTaskLocked = (task, tasklist) => {
    return task["dependencyIds"]
      .map(id => tasklist.find(task => task["id"] === id))
      .map(task => task["completedAt"])
      .includes(null);
  };

  return { sortTasksByGroup, groupSummary, getTasksByGroupName, isTaskLocked };
};
