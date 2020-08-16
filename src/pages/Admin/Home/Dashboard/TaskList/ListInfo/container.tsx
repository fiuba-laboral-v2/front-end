import React, { FunctionComponent } from "react";

import { ITaskListTranslations } from "../interface";
import { ListInfo } from "./component";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ListInfoContainer: FunctionComponent<IListInfoProps> = (
  { translations, statuses }
) => {
  const translationParts: string[] = [];
  if (statuses.includes(ApprovalStatus.rejected)) translationParts.push(translations.rejected);
  if (statuses.includes(ApprovalStatus.pending)) translationParts.push(translations.pending);
  if (statuses.includes(ApprovalStatus.approved)) translationParts.push(translations.approved);

  let translation = translations.tasks;
  if (statuses.length < 3 && statuses.length > 0) translation = translation + ` ${translationParts.join(" y ")}`;
  return (
  <ListInfo
    translation={translation}
  />);
};

interface IListInfoProps {
  translations: ITaskListTranslations;
  statuses: ApprovalStatus[];
}
