import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IMenuTranslations, IMenuContainerProps } from "./interfaces";
import { ApprovableEntityType } from "$interfaces/Approvable";
import { Menu } from "./component";
import { filter as reject } from "lodash";

export const MenuContainer: FunctionComponent<IMenuContainerProps> = (
  {
    refetchApprovableEntities,
    filter,
    onSelectFilter
  }
) => {
  const transactions = useTranslations<IMenuTranslations>("adminMenu");

  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const addEntityType = async (entityType: ApprovableEntityType) => {
    let entityTypes: ApprovableEntityType[] | undefined = filter.approvableEntityTypes || [];
    if (entityTypes.includes(entityType)) {
      entityTypes = reject(entityTypes, type => type !== entityType);
      if (entityTypes.length === 0) entityTypes = undefined;
    } else {
      entityTypes = [...entityTypes, entityType];
    }
    const changedFilter = { ...filter, approvableEntityTypes: entityTypes };
    onSelectFilter(changedFilter);
    await refetchApprovableEntities(changedFilter);
  };

  return (
    <Menu
      filter={filter}
      translations={transactions.data}
      addEntityType={addEntityType}
    />
  );
};
