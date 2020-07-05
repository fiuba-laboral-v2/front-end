import React, { FunctionComponent, useState } from "react";
import { Tab } from "../Tab";
import { ApprovableEntityType } from "../../../../../../interfaces/Approvable";

export const ApprovableTypeTab: FunctionComponent<IApprovableTypeTabProps> = (
  {
    iconTitle,
    Icon,
    onClick,
    type,
    types
  }
) => {
  const [selected, setSelected] = useState(types.includes(type));
  const toggleSelected = () => {
    setSelected(!selected);
    onClick(!selected, type);
    return selected;
  };

  return (
    <Tab
      selected={selected}
      iconTitle={iconTitle}
      Icon={Icon}
      onClick={() => toggleSelected()}
    />
  );
};

interface IApprovableTypeTabProps {
  iconTitle: string;
  Icon: FunctionComponent<IIcon>;
  types: ApprovableEntityType[];
  type: ApprovableEntityType;
  onClick: (selected: boolean, entityType: ApprovableEntityType) => void;
}

interface IIcon {
  className?: string;
}
