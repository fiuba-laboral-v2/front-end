import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { Title } from "$components/Title";
import { ITitleProps } from "$components/Title/interface";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

const TitleContainer: FunctionComponent = () => {
  const translations = useTranslations<ITitleProps>("companyProfileTitle");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  return (
    <Title
      title={translations.data.title}
      subtitle={translations.data.subtitle}
    />
  );
};

export { TitleContainer };
