import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable";
import { TRefetchPendingEntities } from "$hooks/queries";

export const Dashboard: FunctionComponent<IDashboardProps> = (
  {
    refetchApprovableEntities,
    approvableEntities,
    selectedTask,
    setSelectedTask,
    filter,
    setFilter
  }
) => (
  <Window width="fullWidth">
    <div className={styles.mainContent}>
      <Menu
        refetchApprovableEntities={refetchApprovableEntities}
        filter={filter}
        onSelectFilter={setFilter}
      />
      <TaskList
        approvableEntities={approvableEntities}
        selectedTask={selectedTask}
        onSelectTask={setSelectedTask}
      />
      <TaskDetail
        refetchApprovableEntities={() =>
          refetchApprovableEntities && refetchApprovableEntities(filter)
        }
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
  approvableEntities?: IApprovable[];
  refetchApprovableEntities?: TRefetchPendingEntities;
}
