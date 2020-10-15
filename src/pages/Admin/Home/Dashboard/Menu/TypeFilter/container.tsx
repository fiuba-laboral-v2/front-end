import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { TypeFilter } from "./component";
import { ITypeFilterContainerProps, ITypeFilterTranslations } from "./interfaces";
import { TAdminTaskType } from "$interfaces/AdminTask";
import { without } from "lodash";

export const TypeFilterContainer: FunctionComponent<ITypeFilterContainerProps> = ({
  className,
  types,
  onFilterByType
}) => {
  const transactions = useTranslations<ITypeFilterTranslations>("typeFilterMenu");
  if (!transactions) return <Fragment />;

  const toggleType = (adminTaskType: TAdminTaskType) => {
    if (types.includes(adminTaskType)) return onFilterByType(without(types, adminTaskType));
    onFilterByType([...types, adminTaskType]);
  };

  return (
    <TypeFilter
      className={className}
      translations={transactions}
      types={types}
      toggleType={toggleType}
    />
  );
};
