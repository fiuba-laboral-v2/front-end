import React, { FunctionComponent } from "react";
import { Tab } from "../Tab";
import { IAdminTaskTypeTabProps } from "./interfaces";

export const AdminTaskTypeTab: FunctionComponent<IAdminTaskTypeTabProps> = (
  {
    className,
    color,
    iconTitle,
    Icon,
    toggleSelected,
    selected
  }
) => {
  return (
    <Tab
      className={className}
      color={color}
      selected={selected}
      iconTitle={iconTitle}
      Icon={Icon}
      onClick={toggleSelected}
    />
  );
};
