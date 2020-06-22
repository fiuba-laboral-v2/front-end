import React, { Fragment, FunctionComponent } from "react";
import { List } from "./component";
import { usePendingEntities } from "$hooks";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const ListContainer: FunctionComponent = () => {
  const response = usePendingEntities();

  if (response.loading) return <Fragment/>;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <List approvableEntities={response.data.getPendingEntities}/>;
};
