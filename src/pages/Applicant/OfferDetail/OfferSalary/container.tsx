import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { OfferSalary } from "./component";
import { IOfferSalaryContainerProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferSalaryContainer: FunctionComponent<IOfferSalaryContainerProps> = (
  {
    offer,
    className
  }
) => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(GET_TRANSLATIONS, {
    variables: {
      paths: [
        "offer.salary.title",
        "offer.salary.salaryFrom",
        "offer.salary.salaryTo"
      ]
    }
  });

  if (error) history.push(RoutesBuilder.notFound);

  const [title, salaryFrom, salaryTo] = getTranslations;

  return (
    <OfferSalary
      className={className}
      translations={{
        title,
        salaryFrom,
        salaryTo
      }}
      offer={offer}
    />
  );
};

export { OfferSalaryContainer };
