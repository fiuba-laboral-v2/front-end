import React, { FunctionComponent } from "react";

import { ITaskListTranslations } from "../interfaces";
import { ListInfo } from "./component";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ListInfoContainer: FunctionComponent<IListInfoProps> = ({
  translations,
  statuses
}) => {
  // @ts-ignore
  const translation: string = translations[statuses.sort().join("_or_") || "none"];
  return <ListInfo translation={translation} />;
};

interface IListInfoProps {
  translations: ITaskListTranslations;
  statuses: ApprovalStatus[];
}
