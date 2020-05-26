import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { Header } from "$components/Header";
import { IHeaderProps } from "$components/Header/interface";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

const TitleContainer: FunctionComponent = () => {
  const translations = useTranslations<IHeaderProps>("companyProfileTitle");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <Header
      title={translations.data.title}
      subtitle={translations.data.subtitle}
    />
  );
};

export { TitleContainer };
