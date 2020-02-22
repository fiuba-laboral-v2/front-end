import React, { FunctionComponent } from "react";
import { getTranslations } from "$queries";
import { getApplicantByPadron } from "$queries";
import { ApplicantDetail } from "./component";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const ApplicantDetailContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
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
  ] = data ? data.getTranslations : ["", "", "", ""];

  const { id } = useParams();
  const response = useQuery(getApplicantByPadron, {
      variables: {
        padron: parseInt(id!, 10)
      }
    }
  );

  if (response.error) return (<NotFound/>);

  const {
    name,
    surname,
    padron,
    description,
    capabilities,
    careers
  } = response.data ? response.data.getApplicantByPadron : {
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
      careers={careers}
      capabilities={capabilities}
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
