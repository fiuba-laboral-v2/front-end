import React, { FunctionComponent } from "react";
import { CreateOffer } from "./component";
import { useCreateOffer } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const createOffer = useCreateOffer();

  return <CreateOffer
    onSubmit={async values => {
      const response = await createOffer({
        variables: values,
        handlers: {
          defaultHandler: () => history.push(RoutesBuilder.internalServerError)
        }
      });
      if (response.error) return;
      history.push(RoutesBuilder.applicant.offerDetail(response.data.createOffer.uuid));
    }}
    translations={{
      formTitle: "formTitle",
      offerTitle: "offerTitle",
      description: "description",
      hoursPerDay: "hoursPerDay",
      minimumSalary: "minimumSalary",
      maximumSalary: "maximumSalary",
      submit: "submit"
    }}
  />;
};
