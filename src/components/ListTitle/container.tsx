import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/translations";
import { IListTitleProps } from "./interface";
import { Title } from "$components/Title";
import { ITitleProps } from "../Title/interface";

const ListTitleContainer: FunctionComponent<IListTitleProps> = ({ titleTranslationPath }) => {
  const {
    translations,
    error
  } = useTranslations<ITitleProps>(titleTranslationPath);
  if (error) return <Fragment/>;

  return <Title title={translations!.title}/>;
};

export { ListTitleContainer };
