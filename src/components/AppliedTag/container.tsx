import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { AppliedTag } from "./component";

export const AppliedTagContainer: FunctionComponent = () => {
  const translations = useTranslations<{ label: string }>("appliedTag");

  return <AppliedTag label={translations?.label || ""} />;
};
