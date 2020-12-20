import React, { FunctionComponent } from "react";
import { Header } from "$components/Header";
import { useTranslations } from "$hooks";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({
  className,
  translationPath
}) => {
  const translations = useTranslations<IApplicantListMainTitle>(translationPath);

  return (
    <>
      {translations && (
        <Header className={className} title={translations.title} subtitle={translations.subtitle} />
      )}
    </>
  );
};

interface IMainTitleContainerProps {
  translationPath: string;
  className?: string;
}

interface IApplicantListMainTitle {
  title: string;
  subtitle: string;
}
