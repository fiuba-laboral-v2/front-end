import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { Menu } from "./component";
import { IAdminTasksFilter } from "$interfaces/AdminTask";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = ({
  refetchGetAdminTasks,
  filter,
  onSelectFilter
}) => {
  const onFilter = async <T extends unknown>(key: keyof IAdminTasksFilter, items: T[]) => {
    const changedFilter = { ...filter, [key]: items };
    onSelectFilter(changedFilter);
    if (refetchGetAdminTasks) await refetchGetAdminTasks(changedFilter);
  };

  return <Menu filter={filter} onFilter={onFilter} />;
};
