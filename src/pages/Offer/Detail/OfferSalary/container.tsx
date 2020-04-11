import React, { FunctionComponent } from "react";
import { OfferSalary } from "./component";

import { IOfferSalaryContainerProps } from "./interface";

const OfferSalaryContainer: FunctionComponent<IOfferSalaryContainerProps> = (
  {
    offer,
    className
  }) => {
  const salaryFromTranslation = "Desde";
  const salaryToTranslation = "Hasta";

  return (
    <OfferSalary
      className={className}
      title={"Salario Neto"}
      translations={
        {
          salaryFromTranslation: salaryFromTranslation,
          salaryToTranslation: salaryToTranslation
        }
      }
      offer={offer}
    />
  );
};

export { OfferSalaryContainer };
