import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    extensionText,
    graduadosText,
    className,
    extensionApprovalStatus,
    graduadosApprovalStatus
  }
) => (
  <div className={classNames(styles.separatedStatusLabel, className)}>
    <StatusLabel
      tooltipText={translations.extensionTooltip}
      text={extensionText}
      className={styles.extensionApprovalStatus}
      status={extensionApprovalStatus}
      useTooltip
      fixedPosition={false}
      horizontalLayout
      allCornersRound
      transparentBackground
      expandHorizontally
    />
    <StatusLabel
      tooltipText={translations.graduadosTooltip}
      text={graduadosText}
      className={styles.graduadosApprovalStatus}
      status={graduadosApprovalStatus}
      useTooltip
      fixedPosition={false}
      horizontalLayout
      allCornersRound
      transparentBackground
      expandHorizontally
    />
  </div>
);
