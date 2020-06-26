import React, { Fragment, FunctionComponent } from "react";
import { IAdminTaskListContainerProps } from "./interface";
import { usePendingEntities } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { AdminTaskList } from "./component";

export const AdminTaskListContainer: FunctionComponent<IAdminTaskListContainerProps> = (
  { onSelectTask }
) => {
  const response = usePendingEntities();

  if (response.loading) return <Fragment/>;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <AdminTaskList
    approvableEntities={response.data.getPendingEntities}
    onSelectTask={onSelectTask}
  />;
};
