import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { CardTag } from "$components/CardTag";

export const AppliedTagContainer: FunctionComponent = () => {
  const translations = useTranslations<{ label: string }>("appliedTag");

  return <CardTag label={translations?.label || ""} color="green" />;
};
