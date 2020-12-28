import React, { FunctionComponent, useState } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { TRefetchGetAdminTasks } from "$hooks/queries";

export const Dashboard: FunctionComponent<IDashboardProps> = ({
  loading,
  refetchGetAdminTasks,
  adminTasks,
  selectedTask,
  setSelectedTask,
  filter,
  setFilter,
  fetchMore,
  shouldFetchMore
}) => {
  const [loadingStatusUpdate, setLoadingStatusUpdate] = useState(false);

  return (
    <Window width="fullWidth" desktopOnly alwaysHideNavbar>
      <div className={styles.mainContent}>
        <Menu
          refetchGetAdminTasks={refetchGetAdminTasks}
          filter={filter}
          onSelectFilter={setFilter}
        />
        <TaskList
          loading={loadingStatusUpdate || loading}
          adminTasks={loadingStatusUpdate ? [] : adminTasks}
          statuses={filter.statuses}
          selectedTask={selectedTask}
          onSelectTask={setSelectedTask}
          fetchMore={fetchMore}
          shouldFetchMore={shouldFetchMore}
        />
        <TaskDetail
          setLoadingStatusUpdate={setLoadingStatusUpdate}
          selectedTask={loadingStatusUpdate ? undefined : selectedTask}
          refetchAdminTasks={() => refetchGetAdminTasks && refetchGetAdminTasks(filter)}
          onStatusUpdate={() => setSelectedTask(undefined)}
        />
      </div>
    </Window>
  );
};

interface IDashboardProps {
  loading: boolean;
  selectedTask?: TAdminTask;
  setSelectedTask: (task?: TAdminTask) => void;
  filter: IAdminTasksFilter;
  setFilter: (filter: IAdminTasksFilter) => void;
  adminTasks?: TAdminTask[];
  refetchGetAdminTasks?: TRefetchGetAdminTasks;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
}
