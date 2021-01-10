import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { IListTitleProps } from "./interfaces";
import { Header } from "$components/Header";
import { IHeaderProps } from "../Header/interfaces";

export const ListTitleContainer: FunctionComponent<IListTitleProps> = ({
  titleTranslationPath,
  className
}) => {
  const translations = useTranslations<IHeaderProps>(titleTranslationPath);
  if (!translations) return <Fragment />;

  return <Header title={translations.title} className={className} />;
};
