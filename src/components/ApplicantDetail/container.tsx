import React, { FunctionComponent } from "react";
import { getTranslations } from "$queries";
import { getApplicantByPadron } from "$queries";
import { ApplicantDetail } from "./component";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";
import { ICapability, ICareer } from "./interface";

const ApplicantDetailContainer: FunctionComponent = () => {
  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "applicant.padron",
          "applicant.capabilities",
          "applicant.careers",
          "applicant.credits"
        ]
      }
    }
  );

  const [
    padronTranslation,
    capabilitiesTranslation,
    careersTranslation,
    creditsTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", "", ""];

  const { id } = useParams();
  const { data: applicantData, error: applicantError } = useQuery(getApplicantByPadron, {
      variables: {
        padron: parseInt(id!, 10)
      }
    }
  );

  if (applicantError) return (<NotFound/>);

  const {
    name,
    surname,
    padron,
    description,
    capabilities,
    careers
  } = applicantData ? applicantData.getApplicantByPadron : {
    name: "",
    surname: "",
    padron: 0,
    description: "",
    capabilities: [],
    careers: []
  };

  return (
    <ApplicantDetail
      name={name}
      surname={surname}
      padron={padron}
      description={description}
      careers={careers?.map((career: ICareer) =>
        `${career.code} - ${career.description}: ${career.credits}`
      )}
      capabilities={capabilities?.map((capability: ICapability) => capability.description)}
      translations={
        {
          padron: padronTranslation,
          capabilities: capabilitiesTranslation,
          careers: careersTranslation,
          credits: creditsTranslation
        }
      }
    />
  );
};

export { ApplicantDetailContainer };
