import React, { FunctionComponent } from "react";
import { Tab } from "../Tab";
import { IApprovableTypeTabProps } from "./interfaces";

export const ApprovableTypeTab: FunctionComponent<IApprovableTypeTabProps> = (
  {
    iconTitle,
    Icon,
    toggleSelected,
    selected
  }
) => {
  return (
    <Tab
      selected={selected}
      iconTitle={iconTitle}
      Icon={Icon}
      onClick={toggleSelected}
    />
  );
};
