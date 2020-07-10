import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { TAdminTask, IAdminTasksFilter } from "$interfaces/AdminTask";
import { TRefetchGetAdminTasks } from "$hooks/queries";

export const Dashboard: FunctionComponent<IDashboardProps> = (
  {
    refetchGetAdminTasks,
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
        refetchGetAdminTasks={refetchGetAdminTasks}
        filter={filter}
        onSelectFilter={setFilter}
      />
      <TaskList
        adminTasks={adminTasks}
        selectedTask={selectedTask}
        onSelectTask={setSelectedTask}
      />
      <TaskDetail
        refetchAdminTasks={() =>
          refetchGetAdminTasks && refetchGetAdminTasks(filter)
        }
        selectedTask={selectedTask}
        onStatusUpdate={() => setSelectedTask(undefined)}
      />
    </div>
  </Window>
);

interface IDashboardProps {
  selectedTask?: TAdminTask;
  setSelectedTask: (task?: TAdminTask) => void;
  filter: IAdminTasksFilter;
  setFilter: (filter: IAdminTasksFilter) => void;
  adminTasks?: TAdminTask[];
  refetchGetAdminTasks?: TRefetchGetAdminTasks;
}
