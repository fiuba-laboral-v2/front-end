import React, { FunctionComponent } from "react";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { ICareersProps, ICareer } from "./interface";

const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    careers,
    careersTitle,
    creditsTitle
  }) => {

  return (
    <ApplicantItemsDetail
      items={
        careers?.map((career: ICareer) =>
          `${career.code} - ${career.description}: ${career.credits}`
        )
      }
      title={careersTitle}
      itemSuffix={creditsTitle}
    />
  );
};

export { CareersDetail };
