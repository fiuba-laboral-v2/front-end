import React, { FunctionComponent } from "react";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { ICareersProps, ICareer } from "./interface";

const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    careers,
    capabilitiesTitle,
    creditsTitle
  }) => {

  return (
    <ApplicantItemsDetail
      items={
        careers?.map((career: ICareer) =>
          `${career.code} - ${career.description}: ${career.credits}`
        )
      }
      title={capabilitiesTitle}
      itemSuffix={creditsTitle}
    />
  );
};

export { CareersDetail };
