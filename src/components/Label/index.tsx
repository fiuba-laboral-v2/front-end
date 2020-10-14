import React, { FunctionComponent } from "react";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import styles from "./styles.module.scss";

export const Label: FunctionComponent<ILabelProps> = ({
  className,
  Icon,
  text,
  tooltipText,
  color,
  type
}) => (
  <Tooltip
    title={tooltipText || ""}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !tooltipText }) }}
  >
    <div
      className={classNames(className, {
        [styles.transparent]: type === "no-background",
        [styles[`background${color}`]]: type !== "no-background",
        [styles.small]: type === "small",
        [styles.large]: type === "large" || type === "no-background",
        [styles.withText]: !!text
      })}
    >
      {text && (
        <span
          className={classNames(styles.text, {
            [styles[`color${color}`]]: type === "no-background"
          })}
        >
          {text}
        </span>
      )}
      <div className={styles.iconContainer}>
        <Icon
          className={classNames(styles.icon, {
            [styles[`color${color}`]]: type === "no-background"
          })}
          fontSize="inherit"
        />
      </div>
    </div>
  </Tooltip>
);

export type LabelType = "small" | "large" | "no-background";

export interface ILabelLayoutProps {
  className?: string;
  type: LabelType;
}

export interface ILabelTextProps {
  text?: string;
  tooltipText?: string;
}

interface ILabelProps extends ILabelLayoutProps, ILabelTextProps {
  Icon: FunctionComponent<SvgIconProps>;
  color: "Red" | "Green" | "DarkYellow";
}
