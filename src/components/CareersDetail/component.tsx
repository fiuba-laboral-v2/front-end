import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { ICareersProps } from "./interface";
import { ICareer } from "$interfaces/Applicant";

const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations: {
      careersTitle,
      creditsProgress
    }
  }) => {
  const percentage = (career: ICareer) => {
    return ((career.creditsCount / career.credits) * 100).toFixed(2);
  };

  return (
    <div className={className}>
      <ItemsDetail
        items={
          careers.map(career =>
            `${career.description}: ${percentage(career)} ${creditsProgress}`
          )
        }
        title={careersTitle}
      />
    </div>
  );
};

export { CareersDetail };
