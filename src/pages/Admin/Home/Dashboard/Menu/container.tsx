import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { TAdminTaskType } from "$interfaces/AdminTask";
import { Menu } from "./component";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    refetchGetAdminTasks,
    filter,
    onSelectFilter
  }
) => {
  const onFilterByType = async (adminTaskTypes: TAdminTaskType[]) => {
    const changedFilter = { ...filter, adminTaskTypes };
    onSelectFilter(changedFilter);
    if (refetchGetAdminTasks) await refetchGetAdminTasks(changedFilter);
  };

  const onFilterByStatus = async (statuses: ApprovalStatus[]) => {
    const changedFilter = { ...filter, statuses };
    onSelectFilter(changedFilter);
    if (refetchGetAdminTasks) await refetchGetAdminTasks(changedFilter);
  };

  return (
    <Menu
      filter={filter}
      onFilterByType={onFilterByType}
      onFilterByStatus={onFilterByStatus}
    />
  );
};
