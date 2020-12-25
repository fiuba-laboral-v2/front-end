import React, { FunctionComponent } from "react";

import { IOfferStateDescriptionProps } from "./interface";

export const OfferStateDescription: FunctionComponent<IOfferStateDescriptionProps> = ({
  message
}) => (
  <p>
    {message[0]}
    {message.length === 2 && (
      <>
        <br />
        {message[1]}
      </>
    )}
  </p>
);
