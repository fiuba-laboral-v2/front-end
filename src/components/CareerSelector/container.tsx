import React, { FunctionComponent } from "react";
import { ICareerSelectorContainerProps } from "./interface";
import { CareerSelector } from "./compontent";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "../../graphql/queries";


export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const { data: translationsData, loading, error } = useQuery(GET_TRANSLATIONS, {
    variables: { paths: ["applicant.signUp.career", "applicant.signUp.credits"] }
  });
  const [
    careerLabel,
    creditsLabel
  ] = translationsData ? translationsData.getTranslations : ["", ""];

  if (loading || error) return (<div/>);

  return (
    <CareerSelector
      careerLabel={careerLabel}
      creditsLabel={creditsLabel}
      {...props}
    />
  );
};
