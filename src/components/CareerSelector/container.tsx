import React, { FunctionComponent } from "react";
import { ICareerSelectorContainerProps } from "./interface";
import { CareerSelector } from "./compontent";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "../../graphql/queries";


export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const { data: translationsData } = useQuery(getTranslations, {
      variables: { paths: ["applicant.career", "applicant.signUp.credits"] }
    }
  );
  const [careerLabel, creditsLabel] = translationsData ? translationsData.getTranslations : [""];

  return (
    <CareerSelector
      careerLabel={careerLabel}
      creditsLabel={creditsLabel}
      {...props}
    />
  );
};
