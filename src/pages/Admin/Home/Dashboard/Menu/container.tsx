import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IMenuTranslations, IMenuContainerProps } from "./interfaces";
import { ApprovableEntityType } from "$interfaces/Approvable";
import { Menu } from "./component";
import { uniq } from "lodash";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    filter,
    onSelectFilter
  }
) => {
  const transactions = useTranslations<IMenuTranslations>("adminMenu");

  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const addEntityType = async (entityType: ApprovableEntityType) => {
    const entityTypes = uniq([...filter.entityTypes || [], entityType]);
    const changedFilter = { ...filter, entityTypes: entityTypes };
    onSelectFilter(changedFilter);
  };

  return (
    <Menu
      translations={transactions.data}
      addEntityType={addEntityType}
    />
  );
};
