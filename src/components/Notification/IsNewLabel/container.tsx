import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { IsNewLabel } from "./component";

export const IsNewLabelContainer: FunctionComponent = () => {
  const translations = useTranslations<{ isNew: string }>("isNewLabel");

  return <IsNewLabel label={translations?.isNew || ""} />;
};
