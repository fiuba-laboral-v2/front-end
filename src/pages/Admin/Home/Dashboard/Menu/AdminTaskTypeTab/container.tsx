import React, { FunctionComponent } from "react";
import { AdminTaskTypeTab } from "./component";
import { IAdminTaskTypeTabContainerProps } from "./interfaces";

export const AdminTaskTypeTabContainer: FunctionComponent<IAdminTaskTypeTabContainerProps> = (
  {
    color,
    Icon,
    className,
    iconTitle,
    onClick,
    type,
    types
  }
) => {
  const toggleSelected = () => {
    const selected = types.includes(type);
    onClick(!selected, type);
  };

  return (
    <AdminTaskTypeTab
      className={className}
      color={color}
      Icon={Icon}
      selected={types.includes(type)}
      toggleSelected={toggleSelected}
      iconTitle={iconTitle}
    />
  );
};
