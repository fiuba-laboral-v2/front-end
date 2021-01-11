import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { CardTag } from "$components/CardTag";

export const IsNewLabelContainer: FunctionComponent = () => {
  const translations = useTranslations<{ isNew: string }>("isNewLabel");

  return <CardTag label={translations?.isNew || ""} color="blue" />;
};
