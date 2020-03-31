import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations as GET_TRANSLATIONS } from "$queries";
import { IListTitleProps } from "./interface";
import { Title } from "$components/Title";

const ListTitleContainer: FunctionComponent<IListTitleProps> = ({ titleTranslationPath }) => {
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(
    GET_TRANSLATIONS,
    { variables: { paths: [titleTranslationPath] } }
  );
  if (error) return <div/>;

  const [ titleTranslation ] = getTranslations;
  return <Title title={titleTranslation} />;
};

export { ListTitleContainer };
