import React, { FunctionComponent } from "react";
import { SeparatedStatusLabel, ISeparatedStatusLabelProps } from "$components/SeparatedStatusLabel";
import styles from "./styles.module.scss";

export const StatusLabels: FunctionComponent<ISeparatedStatusLabelProps> = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    targetApplicantType
  }
) => {
  return (
    <SeparatedStatusLabel
      styles={styles}
      type="no-background"
      targetApplicantType={targetApplicantType}
      graduadosApprovalStatus={graduadosApprovalStatus}
      extensionApprovalStatus={extensionApprovalStatus}
    />
  );
};
