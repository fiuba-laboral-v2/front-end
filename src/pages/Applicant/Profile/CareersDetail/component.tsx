import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { ICareersProps } from "./interface";
import { ICareer } from "$interfaces/Applicant";

const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    careers,
    careersTitle,
    creditsProgressTranslation,
    className
  }) => {
  const percentage = (career: ICareer) => {
    career.creditsCount = career.creditsCount || 0;
    return ((career.creditsCount/career.credits)*100).toFixed(2);
  };

  return (
    <div className={className}>
      <ItemsDetail
        items={
          careers.map(career =>
            `${career.description}: ${percentage(career)} ${creditsProgressTranslation}`
          )
        }
        title={careersTitle}
      />
    </div>
  );
};

export { CareersDetail };
