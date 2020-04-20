import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { Title } from "$components/Title";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITitleProps } from "$components/Title/interface";

const TitleContainer: FunctionComponent = () => {
  const translations = useTranslations<ITitleProps>("applicantProfileTitle");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <Title
      title={translations.data.title}
      subtitle={translations.data.subtitle}
    />
  );
};

export { TitleContainer };
