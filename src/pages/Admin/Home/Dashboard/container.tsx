import React, { Fragment, FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable";
import { usePendingEntities } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const DashboardContainer: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<IApprovable>();
  const [filter, setFilter] = useState<IApprovableFilter>({});
  const response = usePendingEntities(filter);
  if (response.loading) return <Fragment/>;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <Dashboard
      refetchApprovableEntities={response.refetch}
      approvableEntities={response.data.getPendingEntities}
      selectedTask={selectedTask}
      setSelectedTask={setSelectedTask}
      filter={filter}
      setFilter={setFilter}
    />
  );
};
