import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { getTranslations as GET_TRANSLATIONS } from "$queries";
import { Title } from "$components/Title";
import { RoutesBuilder } from "$src/routesBuilder";

const TitleContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(GET_TRANSLATIONS, {
      variables: {
        paths: ["applicant.explanation", "applicant.title"]
      }
    }
  );
  if (error) history.push(RoutesBuilder.notFound);

  const [explanation, title] = getTranslations;

  return (
    <Title
      title={title}
      subtitle={explanation}
    />
  );
};

export { TitleContainer };
