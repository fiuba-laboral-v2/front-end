import React, { FunctionComponent, Fragment } from "react";
import { Header } from "$components/Header";
import { useTranslations } from "$hooks";

export const MainTitleContainer: FunctionComponent = () => {
  const translations = useTranslations<IApplicantListMainTitle>("adminApplicantListMainTitle");

  return (
    <Fragment>
      {
        translations &&
        <Header
            title={translations.title}
            subtitle={translations.subtitle}
          />
      }
    </Fragment>
  );
};

interface IApplicantListMainTitle {
  title: string;
  subtitle: string;
}
