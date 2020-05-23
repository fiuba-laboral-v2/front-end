import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { Title } from "$components/Title";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITitleProps } from "$components/Title/interface";
import { Redirect } from "$components/Redirect";

const TitleContainer: FunctionComponent = () => {
  const translations = useTranslations<ITitleProps>("applicantProfileTitle");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;

  return (
    <Title
      title={translations.data.title}
      subtitle={translations.data.subtitle}
    />
  );
};

export { TitleContainer };
