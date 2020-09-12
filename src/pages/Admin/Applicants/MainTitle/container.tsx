import React, { FunctionComponent } from "react";
import { Header } from "$components/Header";
import { useTranslations } from "$hooks";

export const MainTitleContainer: FunctionComponent = () => {
  const translations = useTranslations<IApplicantListMainTitle>("adminApplicantListMainTitle");

  return (
    <>
      {
        translations &&
        <Header
            title={translations.title}
            subtitle={translations.subtitle}
          />
      }
    </>
  );
};

interface IApplicantListMainTitle {
  title: string;
  subtitle: string;
}
