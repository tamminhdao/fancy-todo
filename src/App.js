import React from "react";
import "./App.css";
import { TaskGroup } from "./TaskGroup";
import { TaskDetails } from "./TaskDetails";
import { Router } from "@reach/router";
import DataContext from "./DataContext";
import { DataStore } from "./data-store";

const data = DataStore.retrieve();

const App = () => {
  return (
    <DataContext.Provider value={data}>
      <Router>
        <TaskGroup path="/" />
        <TaskDetails path="/:groupName" />
      </Router>
    </DataContext.Provider>
  );
};

export default App;
