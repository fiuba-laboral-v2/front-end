import React, { FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { TAdminTask, IAdminTasksFilter } from "$interfaces/AdminTask";
import { useGetAdminTasks } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { APPLICANT, COMPANY } from "$typenames";
import { find } from "lodash";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const DashboardContainer: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<TAdminTask>();
  const [filter, setFilter] = useState<IAdminTasksFilter>({
    adminTaskTypes: [APPLICANT, COMPANY],
    statuses: [ApprovalStatus.pending]
  });
  const response = useGetAdminTasks(filter);
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  const adminTasks = response.data?.getAdminTasks;

  return (
    <Dashboard
      refetchGetAdminTasks={response.refetch}
      adminTasks={adminTasks}
      selectedTask={find(adminTasks, ["uuid", selectedTask?.uuid])}
      setSelectedTask={setSelectedTask}
      filter={filter}
      setFilter={setFilter}
    />
  );
};
