import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TypeFilter } from "./component";
import { ITypeFilterContainerProps, ITypeFilterTranslations } from "./interfaces";
import { TAdminTaskType } from "$interfaces/AdminTask";
import { without } from "lodash";

export const TypeFilterContainer: FunctionComponent<ITypeFilterContainerProps> = (
  {
    className,
    types,
    onFilterByType
  }
) => {
  const transactions = useTranslations<ITypeFilterTranslations>("typeFilterMenu");
  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const toggleType = (adminTaskType: TAdminTaskType) => {
    if (types.includes(adminTaskType)) return onFilterByType(without(types, adminTaskType));
    onFilterByType([...types, adminTaskType]);
  };

  return (
    <TypeFilter
      className={className}
      translations={transactions.data}
      types={types}
      toggleType={toggleType}
    />
  );
};
