import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { AdminTaskType } from "$interfaces/AdminTask";
import { Menu } from "./component";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    refetchApprovableEntities,
    filter,
    onSelectFilter
  }
) => {
  const onFilterByType = async (types: AdminTaskType[]) => {
    const changedFilter = { ...filter, approvableEntityTypes: types };
    onSelectFilter({ ...filter, adminTaskTypes: types });
    if (refetchApprovableEntities) await refetchApprovableEntities(changedFilter);
  };

  return (
    <Menu
      filter={filter}
      onFilterByType={onFilterByType}
    />
  );
};
