import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { Title } from "$components/Title";
import NotFound from "$pages/NotFound";
import Loading from "$pages/Loading";

const TitleContainer: FunctionComponent = () => {
  const translationsResponse = useQuery(getTranslations, {
      variables: {
        paths: ["applicant.title"]
      }
    }
  );
  if (translationsResponse.error) return <NotFound/>;
  if (translationsResponse.loading) return <Loading />;

  return (
    <Title
      title={"Postulantes"}
    />
  );
};

export { TitleContainer };
