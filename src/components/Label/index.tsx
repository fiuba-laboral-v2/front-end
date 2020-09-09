import React, { FunctionComponent } from "react";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import styles from "./styles.module.scss";

export const Label: FunctionComponent<ILabelProps> = (
  {
    className,
    Icon,
    text,
    tooltipText,
    shape,
    withoutBackground,
    color,
    circularSize
  }
) => (
  <Tooltip
    title={tooltipText}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !tooltipText }) }}
  >
    <div className={classNames(styles.tag, className, styles[shape], {
      [styles.transparent]: withoutBackground,
      [styles[`background${color}`]]: !withoutBackground,
      [styles[`${circularSize}`]]: circularSize && shape === "circular",
      [styles[`paddingCircular${circularSize}`]]: circularSize && shape === "circular"
    })}>
      {
        shape === "rectangular" &&
        <span
          className={classNames(styles.text, { [styles[`color${color}`]]: withoutBackground })}
        >
          {text}
        </span>
      }
      <div className={classNames(styles.iconContainer)}>
        <Icon
          className={classNames(styles.icon, { [styles[`color${color}`]]: withoutBackground })}
          fontSize="inherit"
        />
      </div>
    </div>
  </Tooltip>
);

export interface ILabelLayoutProps {
  className?: string;
  shape: "circular" | "rectangular";
  circularSize?: "Medium" | "Small";
  withoutBackground?: boolean;
}

export interface ILabelTextProps {
  text: string;
  tooltipText?: string;
}

interface ILabelProps extends ILabelLayoutProps, ILabelTextProps {
  Icon: FunctionComponent<SvgIconProps>;
  color: "Red" | "Green" | "DarkYellow";
}
