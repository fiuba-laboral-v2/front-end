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
      hoursPerDayTranslation={"Horas por dia"}
      title={"Carga horaria"}
      offer={offer}
    />
  );
};

export { OfferWorkloadContainer };
