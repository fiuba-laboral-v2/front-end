import React, { Fragment, FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interface";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks/translations";

const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers,
    className
  }) => {
  const { translations, loading } = useTranslations<ICareerTranslations>("careersDetail");
  if (loading) return <Fragment/>;

  return (
    <CareersDetail
      className={className}
      careers={careers}
      translations={translations!}
    />
  );
};

export { CareersDetailContainer };
