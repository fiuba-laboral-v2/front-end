import React, { Fragment, FunctionComponent } from "react";
import { ITaskListContainerProps } from "./interface";
import { usePendingEntities } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TaskList } from "./component";

export const TaskListContainer: FunctionComponent<ITaskListContainerProps> = (
  { onSelectTask }
) => {
  const response = usePendingEntities();

  if (response.loading) return <Fragment/>;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <TaskList
    approvableEntities={response.data.getPendingEntities}
    onSelectTask={onSelectTask}
  />;
};
