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
  const { data, loading, error, refetch, fetchMore } = useAdminTasks(filter);
  if (error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const adminTasks = data?.getAdminTasks?.results;
  const shouldFetchMore = data?.getAdminTasks?.shouldFetchMore;

  return (
    <Dashboard
      loading={loading}
      setSelectedTask={setSelectedTask}
      filter={filter}
      setFilter={setFilter}
      fetchMore={fetchMore}
      adminTasks={adminTasks}
      shouldFetchMore={shouldFetchMore}
      refetchGetAdminTasks={refetch}
      selectedTask={find(adminTasks, ["uuid", selectedTask?.uuid])}
    />
  );
};
