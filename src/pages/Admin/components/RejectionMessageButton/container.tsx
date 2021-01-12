import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RejectionMessageButton } from "./component";

export const RejectionMessageButtonContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("rejectionMessageButton");
  return <RejectionMessageButton label={translations?.label} />;
};

interface ITranslations {
  label: string;
}
