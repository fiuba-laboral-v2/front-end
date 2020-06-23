import React, { Fragment, FunctionComponent } from "react";
import { ListBody } from "./component";
import { usePendingEntities } from "$hooks";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const ListBodyContainer: FunctionComponent = () => {
  const response = usePendingEntities();

  if (response.loading) return <Fragment/>;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <ListBody approvableEntities={response.data.getPendingEntities}/>;
};
