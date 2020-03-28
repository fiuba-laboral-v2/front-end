import React, { FunctionComponent } from "react";
import { ICareerSelectorContainerProps } from "./interface";
import { CareerSelector } from "./compontent";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "../../graphql/queries";


export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const { data: translationsData } = useQuery(getTranslations, {
      variables: { paths: ["applicant.career"] }
    }
  );
  const [career] = translationsData ? translationsData.getTranslations : [""];

  return (
    <CareerSelector
      career={career}
      {...props}
    />
  );
};
