import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { TAdminTaskType } from "$interfaces/AdminTask";
import { Menu } from "./component";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    refetchGetAdminTasks,
    filter,
    onSelectFilter
  }
) => {
  const onFilterByType = async (types: TAdminTaskType[]) => {
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
