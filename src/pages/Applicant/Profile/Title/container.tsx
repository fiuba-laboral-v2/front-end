import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { Title } from "$components/Title";

const TitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["applicant.explanation", "applicant.title"]
      }
    }
  );
  const [explanation, title] = data ? data.getTranslations : ["", ""];

  return (
    <Title
      title={title}
      subtitle={explanation}
    />
  );
};

export { TitleContainer };
