import React, { Fragment, FunctionComponent } from "react";

import { useTranslations } from "$hooks/queries";
import { without } from "lodash";

import { StatusFilter } from "./component";

import { ITypeFilterContainerProps, IStatusFilterTranslations } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const StatusFilterContainer: FunctionComponent<ITypeFilterContainerProps> = ({
  statuses,
  onFilterByStatus
}) => {
  const transactions = useTranslations<IStatusFilterTranslations>("statusFilterMenu");
  if (!transactions) return <Fragment />;

  const toggleStatus = (status: ApprovalStatus) => {
    if (statuses.includes(status)) return onFilterByStatus(without(statuses, status));
    onFilterByStatus([...statuses, status]);
  };

  return (
    <StatusFilter translations={transactions} statuses={statuses} toggleStatus={toggleStatus} />
  );
};
