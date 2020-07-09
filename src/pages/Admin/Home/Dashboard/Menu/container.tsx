import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { ApprovableEntityType } from "$interfaces/AdminTask";
import { Menu } from "./component";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    refetchApprovableEntities,
    filter,
    onSelectFilter
  }
) => {
  const onFilterByType = async (types: ApprovableEntityType[]) => {
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
