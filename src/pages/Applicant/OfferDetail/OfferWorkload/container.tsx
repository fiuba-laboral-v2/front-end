import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { OfferWorkload } from "./component";
import { IOfferWorkloadContainerProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferWorkloadContainer: FunctionComponent<IOfferWorkloadContainerProps> = (
  {
    offer,
    className
  }) => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(GET_TRANSLATIONS, {
    variables: {
      paths: [
        "offer.workload.title",
        "offer.workload.hoursPerDay"
      ]
    }
  });

  if (error) history.push(RoutesBuilder.notFound);

  const [ title, hoursPerDay ] = getTranslations;
  return (
    <OfferWorkload
      className={className}
      translations={
        {
          title: title,
          hoursPerDay: hoursPerDay
        }
      }
      offer={offer}
    />
  );
};

export { OfferWorkloadContainer };
