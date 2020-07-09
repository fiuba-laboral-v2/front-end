import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { AdminTaskType } from "$interfaces/AdminTask";
import { Menu } from "./component";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    refetchGetAdminTasks,
    filter,
    onSelectFilter
  }
) => {
  const onFilterByType = async (types: AdminTaskType[]) => {
    const changedFilter = { ...filter, adminTaskTypes: types };
    onSelectFilter({ ...filter, adminTaskTypes: types });
    if (refetchGetAdminTasks) await refetchGetAdminTasks(changedFilter);
  };

  return (
    <Menu
      filter={filter}
      onFilterByType={onFilterByType}
    />
  );
};
