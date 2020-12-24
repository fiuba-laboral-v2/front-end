import React, { FunctionComponent } from "react";

import { IOfferFutureStateProps } from "./interface";

export const OfferFutureState: FunctionComponent<IOfferFutureStateProps> = ({ message }) => {
  return (
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
};
