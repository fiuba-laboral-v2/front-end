import React, { FunctionComponent } from "react";
import { OfferCareers } from "./component";

import { IOfferCareersContainerProps } from "./interface";

const OfferCareersContainer: FunctionComponent<IOfferCareersContainerProps> = (
  {
    offer,
    className
  }) => {
  return (
    <OfferCareers
      className={className}
      title={"Carreras"}
      offer={offer}
    />
  );
};

export { OfferCareersContainer };
