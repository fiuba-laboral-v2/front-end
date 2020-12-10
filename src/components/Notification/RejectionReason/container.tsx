import React, { FunctionComponent } from "react";
import { RejectionReason } from "./component";
import { ITranslations, IContainerProps } from "./interfaces";
import { useTranslations } from "$hooks";

export const RejectionReasonContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("rejectionReason");
  return <RejectionReason {...props} translations={translations} />;
};
