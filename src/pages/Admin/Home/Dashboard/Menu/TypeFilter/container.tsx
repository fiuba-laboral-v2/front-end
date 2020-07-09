import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TypeFilter } from "./component";
import { ITypeFilterContainerProps, ITypeFilterTranslations } from "./interfaces";
import { TAdminTaskType } from "$interfaces/AdminTask";

export const TypeFilterContainer: FunctionComponent<ITypeFilterContainerProps> = (
  {
    types,
    onFilterByType
  }
) => {
  const transactions = useTranslations<ITypeFilterTranslations>("typeFilterMenu");
  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const toggleType = (selected: boolean, adminTaskType: TAdminTaskType) => {
    let changedTypes;
    if (selected) {
      changedTypes = [...types, adminTaskType];
    } else {
      changedTypes = types.filter(type => type !== adminTaskType);
    }
    onFilterByType(changedTypes);
  };

  return (
    <TypeFilter
      translations={transactions.data}
      types={types}
      toggleType={toggleType}
    />
  );
};
