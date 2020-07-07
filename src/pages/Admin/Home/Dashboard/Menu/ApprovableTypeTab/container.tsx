import React, { FunctionComponent } from "react";
import { ApprovableTypeTab } from "./component";
import { IApprovableTypeTabContainerProps } from "./interfaces";

export const ApprovableTypeTabContainer: FunctionComponent<IApprovableTypeTabContainerProps> = (
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
    <ApprovableTypeTab
      className={className}
      color={color}
      Icon={Icon}
      selected={types.includes(type)}
      toggleSelected={toggleSelected}
      iconTitle={iconTitle}
    />
  );
};
