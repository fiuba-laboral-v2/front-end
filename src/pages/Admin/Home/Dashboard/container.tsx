import React, { FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { useAdminTasks } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { APPLICANT, COMPANY, JOB_APPLICATION, OFFER } from "$typenames";
import { find } from "lodash";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const DashboardContainer: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<TAdminTask>();
  const [filter, setFilter] = useState<IAdminTasksFilter>({
    adminTaskTypes: [APPLICANT, COMPANY, OFFER, JOB_APPLICATION],
    statuses: [ApprovalStatus.pending]
  });
  const response = useAdminTasks(filter);
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  const result = response.data?.getAdminTasks;
  const adminTasks = result?.results;

  return (
    <Dashboard
      loading={response.loading}
      refetchGetAdminTasks={response.refetch}
      adminTasks={adminTasks}
      selectedTask={find(adminTasks, ["uuid", selectedTask?.uuid])}
      setSelectedTask={setSelectedTask}
      filter={filter}
      setFilter={response.loading ? undefined : setFilter}
      fetchMore={response.fetchMore}
      shouldFetchMore={result?.shouldFetchMore}
    />
  );
};
