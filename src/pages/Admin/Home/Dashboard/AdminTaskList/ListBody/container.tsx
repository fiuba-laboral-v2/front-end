import React, { Fragment, FunctionComponent } from "react";
import { ListBody } from "./component";
import { usePendingEntities } from "$hooks";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApprovable } from "$interfaces/Approvable";

export const ListBodyContainer: FunctionComponent<IListBodyContainerProps> = (
  { onSelectTask }
) => {
  const response = usePendingEntities();

  if (response.loading) return <Fragment/>;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <ListBody
    approvableEntities={response.data.getPendingEntities}
    onSelectTask={onSelectTask}
  />;
};

interface IListBodyContainerProps {
  onSelectTask: (task: IApprovable) => void;
}
