import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { IListTitleProps } from "./interface";
import { Title } from "$components/Title";
import Loading from "$pages/Loading";

const ListTitleContainer: FunctionComponent<IListTitleProps> = ({ titleTranslationPath }) => {
  const { data, loading, error } = useQuery(
    getTranslations,
    { variables: { paths: [titleTranslationPath] } }
  );
  if (error) return <div/>;
  if (loading) return <Loading />;

  const [ titleTranslation ] = data.getTranslations;
  return <Title title={titleTranslation} />;
};

export { ListTitleContainer };
