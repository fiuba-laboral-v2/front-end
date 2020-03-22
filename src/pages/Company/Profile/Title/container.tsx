import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { Title } from "$components/Title";

const TitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["company.explanation", "company.title"]
      }
    }
  );
  const [explanation, myCompany] = data ? data.getTranslations : ["", ""];

  return (
    <Title
      title={myCompany}
      subtitle={explanation}
    />
  );
};

export { TitleContainer };
