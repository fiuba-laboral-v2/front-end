import React, { Fragment, FunctionComponent } from "react";
import { ITaskListContainerProps, ITaskListTranslations } from "./interface";
import { useTranslations } from "$hooks/queries";
import { TaskList } from "./component";

export const TaskListContainer: FunctionComponent<ITaskListContainerProps> = (
  {
    adminTasks,
    onSelectTask,
    selectedTask,
    statuses
  }
) => {
  const translations = useTranslations<ITaskListTranslations>("adminTaskList");
  if (!translations) return <Fragment/>;

  return <TaskList
    adminTasks={adminTasks}
    onSelectTask={onSelectTask}
    selectedTask={selectedTask}
    statuses={statuses}
    translations={translations}
  />;
};
