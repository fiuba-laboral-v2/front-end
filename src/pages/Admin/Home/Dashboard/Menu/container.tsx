import React, { FunctionComponent } from "react";
import { IMenuContainerProps } from "./interfaces";
import { ApprovableEntityType } from "$interfaces/Approvable";
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
    onSelectFilter({ ...filter, approvableEntityTypes: types });
    await refetchApprovableEntities(changedFilter);
  };

  return (
    <Menu
      filter={filter}
      onFilterByType={onFilterByType}
    />
  );
};
