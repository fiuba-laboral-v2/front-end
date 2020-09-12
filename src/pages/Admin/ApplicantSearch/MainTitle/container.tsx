import React, { FunctionComponent } from "react";
import { Header } from "$components/Header";
import { useTranslations } from "$hooks";
import styles from "./styles.module.scss";

export const MainTitleContainer: FunctionComponent = () => {
  const translations = useTranslations<IApplicantListMainTitle>("adminApplicantListMainTitle");

  return (
    <div className={styles.headerContainer}>
      {
        translations &&
        <Header
            title={translations.title}
            subtitle={translations.subtitle}
          />
      }
    </div>
  );
};

interface IApplicantListMainTitle {
  title: string;
  subtitle: string;
}
