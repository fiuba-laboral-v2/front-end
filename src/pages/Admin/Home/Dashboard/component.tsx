import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable";

export const Dashboard: FunctionComponent<IDashboardProps> = (
  {
    approvableEntities,
    selectedTask,
    setSelectedTask,
    filter,
    setFilter
  }
) => (
  <Window width="fullWidth">
    <div className={styles.mainContent}>
      <Menu filter={filter} onSelectFilter={setFilter}/>
      <TaskList
        approvableEntities={approvableEntities}
        selectedTask={selectedTask}
        onSelectTask={setSelectedTask}
      />
      <TaskDetail
        selectedTask={selectedTask}
        onStatusUpdate={() => setSelectedTask(undefined)}
      />
    </div>
  </Window>
);

interface IDashboardProps {
  selectedTask?: IApprovable;
  setSelectedTask: (task?: IApprovable) => void;
  filter: IApprovableFilter;
  setFilter: (filter: IApprovableFilter) => void;
  approvableEntities: IApprovable[];
}
