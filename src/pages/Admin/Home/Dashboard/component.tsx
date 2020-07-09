import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { AdminTask, IAdminTasksFilter } from "$interfaces/AdminTask";
import { TRefetchGetApprovables } from "$hooks/queries";

export const Dashboard: FunctionComponent<IDashboardProps> = (
  {
    refetchApprovableEntities,
    adminTasks,
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
        adminTasks={adminTasks}
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
  selectedTask?: AdminTask;
  setSelectedTask: (task?: AdminTask) => void;
  filter: IAdminTasksFilter;
  setFilter: (filter: IAdminTasksFilter) => void;
  adminTasks?: AdminTask[];
  refetchApprovableEntities?: TRefetchGetApprovables;
}
