import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { Header } from "$components/Header";
import { IHeaderProps } from "$components/Header/interface";

const TitleContainer: FunctionComponent = () => {
  const translations = useTranslations<IHeaderProps>("applicantProfileTitle");

  if (!translations) return <Fragment/>;

  return (
    <Header
      title={translations.title}
      subtitle={translations.subtitle}
    />
  );
};

export { TitleContainer };
