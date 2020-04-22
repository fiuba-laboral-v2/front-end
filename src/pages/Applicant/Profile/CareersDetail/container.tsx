import React, { Fragment, FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interface";
import { Redirect } from "react-router-dom";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks/useTranslations";
import { RoutesBuilder } from "$models/RoutesBuilder";

const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers,
    className
  }) => {
  const translations = useTranslations<ICareerTranslations>("careersDetail");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <CareersDetail
      className={className}
      careers={careers}
      translations={translations.data}
    />
  );
};

export { CareersDetailContainer };
