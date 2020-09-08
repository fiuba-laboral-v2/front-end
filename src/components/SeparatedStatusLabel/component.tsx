import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    extension,
    graduados,
    className,
    withoutBackground,
    statusClassName
  }
) => (
  <div className={classNames(styles.separatedStatusLabel, className)}>
    {
        extension &&
      <StatusLabel
        className={classNames(statusClassName, {
          [styles.extensionApprovalStatus]: extension
        })}
        tooltipText={extension.tooltipText}
        text={extension.text}
        status={extension.status}
        shape="rectangular"
        withoutBackground={withoutBackground}
      />
    }
    {
      graduados &&
      <StatusLabel
        className={statusClassName}
        tooltipText={graduados.tooltipText}
        text={graduados.text}
        status={graduados.status}
        shape="rectangular"
        withoutBackground={withoutBackground}
      />
    }
  </div>
);
