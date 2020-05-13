import React, { FunctionComponent } from "react";
import { CreateOffer } from "./component";

export const CreateOfferContainer: FunctionComponent = () => {
  return <CreateOffer
    onSubmit={() => {
      alert("submit!");
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
