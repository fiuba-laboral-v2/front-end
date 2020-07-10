import React, { Fragment, FunctionComponent } from "react";

import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { StatusFilter } from "./component";
import { Redirect } from "$components/Redirect";

import { ITypeFilterContainerProps, IStatusFilterTranslations } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const StatusFilterContainer: FunctionComponent<ITypeFilterContainerProps> = (
  {
    statuses,
    onFilterByStatus
  }
) => {
  const transactions = useTranslations<IStatusFilterTranslations>("statusFilterMenu");
  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const toggleStatus = (selected: boolean, status: ApprovalStatus) => {
    let changedStatuses;
    if (selected) {
      changedStatuses = [...statuses, status];
    } else {
      changedStatuses = statuses.filter(s => s !== status);
    }
    onFilterByStatus(changedStatuses);
  };

  return (
    <StatusFilter
      translations={transactions.data}
      statuses={statuses}
      toggleStatus={toggleStatus}
    />
  );
};
