import React, { Fragment, FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interface";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks";

export const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers,
    className
  }) => {
  const translations = useTranslations<ICareerTranslations>("careersDetail");
  if (!translations) return <Fragment/>;

  return (
    <CareersDetail
      className={className}
      careers={careers}
      translations={translations}
    />
  );
};
