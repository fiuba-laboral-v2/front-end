import React, { Fragment, FunctionComponent } from "react";
import { ITaskListContainerProps, ITaskListTranslations } from "./interface";
import { useTranslations } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TaskList } from "./component";

export const TaskListContainer: FunctionComponent<ITaskListContainerProps> = (
  {
    approvableEntities,
    onSelectTask,
    selectedTask
  }
) => {
  const translations = useTranslations<ITaskListTranslations>("adminTaskList");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <TaskList
    approvableEntities={approvableEntities}
    onSelectTask={onSelectTask}
    selectedTask={selectedTask}
    translations={translations.data}
  />;
};
