import React, { FunctionComponent } from "react";
import { getTranslations } from "$queries";
import { getApplicantByPadron } from "$queries";
import { ApplicantDetail } from "./component";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const ApplicantDetailContainer: FunctionComponent = () => {
  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "applicant.padron",
          "applicant.capabilities"
        ]
      }
    }
  );

  const [
    padronTranslation,
    capabilitiesTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", "", ""];

  const { id } = useParams();
  const { data: applicantData, error: applicantError } = useQuery(getApplicantByPadron, {
      variables: {
        padron: parseInt(id!, 10)
      }
    }
  );

  if (applicantError) return (<NotFound/>);

  const applicant = applicantData ? applicantData.getApplicantByPadron : {
    applicant: {
      name: "",
      surname: "",
      padron: 0,
      description: "",
      capabilities: [],
      careers: []
    }
  };

  return (
    <ApplicantDetail
      applicant={applicant}
      translations={
        {
          padron: padronTranslation,
          capabilities: capabilitiesTranslation
        }
      }
    />
  );
};

export { ApplicantDetailContainer };
