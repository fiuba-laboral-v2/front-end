import React, { FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";

import { ITaskListTranslations } from "../interface";
import { ListInfo } from "./component";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ListInfoContainer: FunctionComponent<IListInfoProps> = (
  { translations, statuses, ...props }
) => {
  const translationParts: string[] = [];
  if (statuses.includes(ApprovalStatus.rejected)) translationParts.push(translations.rejected);
  if (statuses.includes(ApprovalStatus.pending)) translationParts.push(translations.pending);
  if (statuses.includes(ApprovalStatus.approved)) translationParts.push(translations.approved);

  let translation = translations.tasks;
  if (statuses.length < 3 && statuses.length > 0) translation = translation + ` ${translationParts.join(" y ")}`;
  translation = translation + ":";
  return (
  <ListInfo
    {...props}
    translation={translation}
  />);
};

interface IListInfoProps {
  adminTasks: TAdminTask[];
  translations: ITaskListTranslations;
  statuses: ApprovalStatus[];
}
