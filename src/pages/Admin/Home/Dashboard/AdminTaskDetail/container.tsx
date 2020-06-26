import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries/useTranslations";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { AdminTaskDetail } from "./component";
import { Redirect } from "$components/Redirect";

import { IAdminTaskDetailContainerProps, IAdminTaskDetailTranslations } from "./interfaces";

export const AdminTaskDetailContainer: FunctionComponent<IAdminTaskDetailContainerProps> = (
  {
    selectedTask
  }
) => {
  const translations = useTranslations<IAdminTaskDetailTranslations>("adminTaskDetail");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <AdminTaskDetail
      translations={translations.data}
      selectedTask={selectedTask}
    />
  );
};
