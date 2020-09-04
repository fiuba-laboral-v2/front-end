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
    {
      extensionApprovalStatus &&
      <StatusLabel
        className={classNames({
          [styles.extensionApprovalStatus]: graduadosApprovalStatus
        })}
        tooltipText={translations.extensionTooltip}
        text={extensionText}
        status={extensionApprovalStatus}
        useTooltip
        fixedPosition={false}
        horizontalLayout
        allCornersRound
        transparentBackground
        expandHorizontally
      />
    }
    {
      graduadosApprovalStatus &&
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
    }
  </div>
);
