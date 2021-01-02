import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Actions } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const ActionsContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("applicantProfileActions");
  return (
    <Actions
      {...props}
      translations={translations}
      editLink={RoutesBuilder.applicant.editMyProfile()}
      editPadronLink={RoutesBuilder.applicant.editPadron()}
    />
  );
};
