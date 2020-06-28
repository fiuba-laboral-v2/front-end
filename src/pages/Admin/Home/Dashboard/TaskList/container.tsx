import React, { Fragment, FunctionComponent } from "react";
import { ITaskListContainerProps, ITaskListTranslations } from "./interface";
import { usePendingEntities, useTranslations } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TaskList } from "./component";

export const TaskListContainer: FunctionComponent<ITaskListContainerProps> = (
  { onSelectTask, selectedTask }
) => {
  const response = usePendingEntities();
  const translations = useTranslations<ITaskListTranslations>("adminTaskList");

  if (response.loading || translations.loading) return <Fragment/>;

  if (response.error || translations.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }

  return <TaskList
    approvableEntities={response.data.getPendingEntities}
    onSelectTask={onSelectTask}
    selectedTask={selectedTask}
    translations={translations.data}
  />;
};
