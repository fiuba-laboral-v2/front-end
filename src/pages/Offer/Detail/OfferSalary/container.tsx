import React, { FunctionComponent } from "react";
import { OfferSalary } from "./component";

import { IOfferSalaryContainerProps } from "./interface";

const OfferSalaryContainer: FunctionComponent<IOfferSalaryContainerProps> = (
  {
    offer,
    className
  }
) => {
  const salaryFrom = "Desde";
  const salaryTo = "Hasta";

  return (
    <OfferSalary
      className={className}
      translations={
        {
          title: "Salario Neto",
          salaryFrom: salaryFrom,
          salaryTo: salaryTo
        }
      }
      offer={offer}
    />
  );
};

export { OfferSalaryContainer };
