import React, { FunctionComponent, Fragment } from "react";

import { ITaskListTranslations } from "../interfaces";
import { ListInfo } from "./component";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ListInfoContainer: FunctionComponent<IListInfoProps> = ({
  translations,
  statuses
}) => {
  if (!translations) return <Fragment />;
  // @ts-ignore
  const translation: string = translations[statuses.sort().join("_or_") || "none"];
  return <ListInfo translation={translation} />;
};

interface IListInfoProps {
  translations?: ITaskListTranslations;
  statuses: ApprovalStatus[];
}
