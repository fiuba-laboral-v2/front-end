import React, { FunctionComponent } from "react";
import { ITaskListContainerProps, ITaskListTranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { TaskList } from "./component";

export const TaskListContainer: FunctionComponent<ITaskListContainerProps> = ({
  loading,
  adminTasks,
  onSelectTask,
  selectedTask,
  statuses,
  fetchMore,
  shouldFetchMore
}) => {
  const translations = useTranslations<ITaskListTranslations>("adminTaskList");

  return (
    <TaskList
      loading={loading}
      adminTasks={adminTasks}
      onSelectTask={onSelectTask}
      selectedTask={selectedTask}
      statuses={statuses}
      translations={translations}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
    />
  );
};
