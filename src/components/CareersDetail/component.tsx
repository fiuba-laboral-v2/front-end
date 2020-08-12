import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { ICareersProps } from "./interface";
import { IApplicantCareer } from "$interfaces/Applicant";

export const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations: {
      careersTitle,
      creditsProgress
    }
  }) => {
  const percentage = (applicantCareer: IApplicantCareer) => {
    return ((applicantCareer.creditsCount / applicantCareer.career.credits) * 100).toFixed(2);
  };

  return (
    <div className={className}>
      <ItemsDetail
        items={
          careers.map(applicantCareer =>
            `${applicantCareer.career.description}: ${percentage(applicantCareer)} ${creditsProgress}`
          )
        }
        title={careersTitle}
      />
    </div>
  );
};
