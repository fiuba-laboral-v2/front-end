import React, { Fragment, FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { IListTitleProps } from "./interface";
import { Title } from "$components/Title";

const ListTitleContainer: FunctionComponent<IListTitleProps> = ({ titleTranslationPath }) => {
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(
    GET_TRANSLATIONS,
    { variables: { paths: [ titleTranslationPath ] } }
  );
  if (error) return <Fragment/>;

  const [ titleTranslation ] = getTranslations;
  return <Title title={titleTranslation}/>;
};

export { ListTitleContainer };
