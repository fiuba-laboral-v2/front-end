import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TypeFilter } from "./component";
import { ITypeFilterContainerProps, ITypeFilterTranslations } from "./interfaces";
import { ApprovableEntityType } from "$interfaces/Approvable";

export const TypeFilterContainer: FunctionComponent<ITypeFilterContainerProps> = (
  {
    types,
    onFilterByType
  }
) => {
  const transactions = useTranslations<ITypeFilterTranslations>("adminMenu");
  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const toggleType = (selected: boolean, entityType: ApprovableEntityType) => {
    const removeType = () => types.filter(type => type !== entityType);
    const changedTypes = selected ? [...types, entityType] : removeType();
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
