import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { Title } from "$components/Title";
import Loading from "$pages/Loading";

const TitleContainer: FunctionComponent = () => {
  const { data, loading, error } = useQuery(
    getTranslations,
    { variables: { paths: ["applicants"] } }
  );
  if (error) return <div/>;
  if (loading) return <Loading />;

  const [ applicantsTranslation ] = data.getTranslations;

  return (
    <Title
      title={applicantsTranslation}
    />
  );
};

export { TitleContainer };
