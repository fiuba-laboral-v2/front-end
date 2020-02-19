import React, { FunctionComponent } from "react";
import { getTranslations } from "$queries";
import { ApplicantDetail } from "./component";
import { useQuery } from "@apollo/react-hooks";

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
  const [padron, capabilities, careers, credits ] = data ? data.getTranslations : ["", "", ""];

  return (
    <ApplicantDetail
      name={"Sebastian"}
      surname={"Blanco"}
      padron={
        {
          value: 98539,
          translation: padron
        }
      }
      description={`
      Me considero una graciosa, con talentos de buen humor. Tengo promedio 8 en
      la facultad y por eso me considero una persona sabia con aires de
      grandeza.
      `}
      credits={
        {
          value: 222,
          translation: credits
        }
      }
      careers={
        {
          value: ["Ingenieria Informatica", "Ingenieria Civil"],
          translation: careers
        }
      }
      capabilities={
        {
          value: ["Python", "Node", "css", "Auth security"],
          translation: capabilities
        }
      }
    />
  );
};

export { ApplicantDetailContainer };
