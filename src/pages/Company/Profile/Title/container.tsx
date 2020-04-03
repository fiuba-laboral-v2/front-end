import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { Title } from "$components/Title";

const TitleContainer: FunctionComponent = () => {
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(
    GET_TRANSLATIONS,
    { variables: { paths: ["company.explanation", "company.title"] } }
  );
  if (error) return <div />;

  const [ explanation, myCompany ] = getTranslations;

  return (
    <Title
      title={myCompany}
      subtitle={explanation}
    />
  );
};

export { TitleContainer };
