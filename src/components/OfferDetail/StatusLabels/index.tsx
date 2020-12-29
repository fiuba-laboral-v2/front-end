import React, { FunctionComponent } from "react";
import { SeparatedStatusLabel, ISeparatedStatusLabelProps } from "$components/SeparatedStatusLabel";
import styles from "./styles.module.scss";

export const StatusLabels: FunctionComponent<ISeparatedStatusLabelProps> = ({
  offer,
  currentUserApplicantType
}) => {
  return (
    <SeparatedStatusLabel
      styles={styles}
      type="large"
      offer={offer}
      currentUserApplicantType={currentUserApplicantType}
    />
  );
};
