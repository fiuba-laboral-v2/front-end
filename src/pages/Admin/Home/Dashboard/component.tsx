import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { IUseAdminTasks, TRefetchGetAdminTasks } from "$hooks/queries";
import { OptionalFetchResult } from "$interfaces/Pagination";

export const Dashboard: FunctionComponent<IDashboardProps> = (
  {
    refetchGetAdminTasks,
    adminTasks,
    selectedTask,
    setSelectedTask,
    filter,
    setFilter,
    fetchMore,
    shouldFetchMore
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
        statuses={filter.statuses}
        selectedTask={selectedTask}
        onSelectTask={setSelectedTask}
        fetchMore={fetchMore}
        shouldFetchMore={shouldFetchMore}
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
  fetchMore: () => OptionalFetchResult<IUseAdminTasks>;
  shouldFetchMore: boolean;
}
