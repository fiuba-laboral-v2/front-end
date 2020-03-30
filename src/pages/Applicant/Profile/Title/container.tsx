import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations as GET_TRANSLATIONS } from "$queries";
import { Title } from "$components/Title";
import NotFound from "$pages/NotFound";

const TitleContainer: FunctionComponent = () => {
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(GET_TRANSLATIONS, {
      variables: {
        paths: ["applicant.explanation", "applicant.title"]
      }
    }
  );
  if (error) return <NotFound />;

  const [explanation, title] = getTranslations;

  return (
    <Title
      title={title}
      subtitle={explanation}
    />
  );
};

export { TitleContainer };
