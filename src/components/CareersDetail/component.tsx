import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { ICareersProps } from "./interface";

export const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations: {
      careersTitle
    }
  }) => {
  return (
    <div className={className}>
      <ItemsDetail
        items={careers.map(applicantCareer => applicantCareer.career.description)}
        title={careersTitle}
      />
    </div>
  );
};
