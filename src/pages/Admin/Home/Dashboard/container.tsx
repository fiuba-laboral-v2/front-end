import React, { FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable";
import { usePendingEntities } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { APPLICANT, COMPANY } from "$typenames";
import { find } from "lodash";

export const DashboardContainer: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<IApprovable>();
  const [filter, setFilter] = useState<IApprovableFilter>({
    approvableEntityTypes: [APPLICANT, COMPANY]
  });
  const response = usePendingEntities(filter);
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  const approvableEntities = response.data?.getPendingEntities;

  return (
    <Dashboard
      refetchApprovableEntities={response.refetch}
      approvableEntities={approvableEntities}
      selectedTask={find(approvableEntities, ["uuid", selectedTask?.uuid])}
      setSelectedTask={setSelectedTask}
      filter={filter}
      setFilter={setFilter}
    />
  );
};
