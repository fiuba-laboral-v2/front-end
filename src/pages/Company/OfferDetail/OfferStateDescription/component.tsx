import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { IOfferStateDescriptionProps } from "./interface";

import styles from "./styles.module.scss";

export const OfferStateDescription: FunctionComponent<IOfferStateDescriptionProps> = ({
  title,
  firstLine,
  secondLine,
  isModal
}) => (
  <>
    <p>
      {title} <br />{" "}
    </p>
    <p className={classNames({ [styles.offerStateModal]: isModal })}>
      {/* {isModal && <br />} */}
      {firstLine}
      {firstLine && secondLine && <br />}
      {secondLine}
    </p>
  </>
);
