import React, { Fragment, FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interface";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";

const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers,
    className
  }) => {
  const translations = useTranslations<ICareerTranslations>("careersDetail");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;

  return (
    <CareersDetail
      className={className}
      careers={careers}
      translations={translations.data}
    />
  );
};

export { CareersDetailContainer };
