import React, { FunctionComponent } from "react";
import { CreateOffer } from "./component";

export const CreateOfferContainer: FunctionComponent = () => {
  return <CreateOffer onSubmit={() => {
    alert("submit!");
  }}/>;
};
