import React, { Fragment, FunctionComponent } from "react";

import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { without } from "lodash";

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

  const toggleStatus = (status: ApprovalStatus) => {
    if (statuses.includes(status)) return onFilterByStatus(without(statuses, status));
    onFilterByStatus([...statuses, status]);
  };

  return (
    <StatusFilter
      translations={transactions.data}
      statuses={statuses}
      toggleStatus={toggleStatus}
    />
  );
};
