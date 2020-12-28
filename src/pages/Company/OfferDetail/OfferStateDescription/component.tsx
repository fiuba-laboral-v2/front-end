import DialogContentText from "@material-ui/core/DialogContentText";
import React, { FunctionComponent } from "react";

import { IOfferStateDescriptionProps } from "./interface";

export const OfferStateDescription: FunctionComponent<IOfferStateDescriptionProps> = ({
  title,
  firstLine,
  secondLine,
  isModal
}) => (
  <>
    {!isModal && (
      <>
        <p>
          {title} <br />
        </p>
        <p>
          {firstLine}
          {firstLine && secondLine && <br />}
          {secondLine}
        </p>
      </>
    )}
    {isModal && (
      <DialogContentText>
        <>
          {firstLine} <br /> {secondLine}
        </>
      </DialogContentText>
    )}
  </>
);
