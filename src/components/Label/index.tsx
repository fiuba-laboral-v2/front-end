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
    withTooltip,
    fixedToTopRight,
    width,
    background,
    color
  }
) => (
  <Tooltip
    title={tooltipText}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !withTooltip }) }}
  >
    <div className={classNames(styles.tag, className, {
      [styles.fixedToTopRight]: fixedToTopRight,
      [styles.relativePosition]: !fixedToTopRight && width !== "unset",
      [styles.expandHorizontally]: width === "unset" && !fixedToTopRight,
      [styles.allCornersRound]: !fixedToTopRight,
      [styles.oppositeCornersRound]: fixedToTopRight,
      [styles[`background${color}`]]: background === "dark",
      [styles[`transparentBackground${color}`]]: background === "light"
    })}>
      {
        width !== "square" &&
        <span
          className={classNames(styles.text, { [styles[`color${color}`]]: background === "light" })}
        >
          {text}
        </span>
      }
      <div className={styles.iconContainer}>
        <Icon
          className={classNames(styles.icon, { [styles[`color${color}`]]: background === "light" })}
          fontSize="inherit"
        />
      </div>
    </div>
  </Tooltip>
);

export interface ILabelLayoutProps {
  className?: string;
  background: "dark" | "light";
  width: "fit-content" | "unset" | "square";
  fixedToTopRight?: boolean;
  withTooltip?: boolean;
}

export interface ILabelTextProps {
  text: string;
  tooltipText: string;
}

interface ILabelProps extends ILabelLayoutProps, ILabelTextProps {
  Icon: FunctionComponent<SvgIconProps>;
  color: "Red" | "Green" | "DarkYellow";
}
