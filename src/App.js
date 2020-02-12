import React from "react";
import "./App.css";
import { TaskGroup } from "./TaskGroup";
import { TaskDetails } from "./TaskDetails";
import DataContext from "./DataContext";
import { DataStore } from "./data-store";

const data = DataStore.retrieve();

const App = () => {
  const [groupView, setGroupView] = React.useState(true);
  const [detailView, setDetailView] = React.useState(false);
  const [groupName, setGroupName] = React.useState("");

  return (
    <DataContext.Provider value={data}>
      <>
        {groupView && !detailView && (
          <TaskGroup
            setGroupName={setGroupName}
            setGroupView={setGroupView}
            setDetailView={setDetailView}
          />
        )}
        {detailView && !groupView && (
          <TaskDetails
            groupName={groupName}
            setGroupView={setGroupView}
            setDetailView={setDetailView}
          />
        )}
      </>
    </DataContext.Provider>
  );
};

export default App;
