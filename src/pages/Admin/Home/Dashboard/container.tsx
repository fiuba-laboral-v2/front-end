import React, { FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { IApprovable, IApprovableFilter } from "$interfaces/AdminTask";
import { useGetAdminTasks } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { APPLICANT, COMPANY } from "$typenames";
import { find } from "lodash";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const DashboardContainer: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<IApprovable>();
  const [filter, setFilter] = useState<IApprovableFilter>({
    adminTaskTypes: [APPLICANT, COMPANY],
    statuses: [ApprovalStatus.pending]
  });
  const response = useGetAdminTasks(filter);
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  const approvableEntities = response.data?.getAdminTasks;

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
