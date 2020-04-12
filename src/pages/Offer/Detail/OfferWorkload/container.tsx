import React, { FunctionComponent } from "react";
import { OfferWorkload } from "./component";

import { IOfferWorkloadContainerProps } from "./interface";

const OfferWorkloadContainer: FunctionComponent<IOfferWorkloadContainerProps> = (
  {
    offer,
    className
  }) => {
  return (
    <OfferWorkload
      className={className}
      translations={
        {
          title: "Carga horaria",
          hoursPerDay: "Horas por dia"
        }
      }
      offer={offer}
    />
  );
};

export { OfferWorkloadContainer };
