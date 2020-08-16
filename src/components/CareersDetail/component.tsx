import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { ICareersProps } from "./interface";

export const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations,
    buildLabel
  }) => {
  return (
    <div className={className}>
      <ItemsDetail
        items={careers.map(applicantCareer => buildLabel(applicantCareer))}
        title={translations.careersTitle}
      />
    </div>
  );
};
