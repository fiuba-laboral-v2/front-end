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
    useTooltip,
    fixedPosition,
    allCornersRound,
    invertColor,
    expand,
    color
  }
) => (
  <Tooltip
    title={tooltipText}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !useTooltip }) }}
  >
    <div className={classNames(styles.tag, className, {
      [styles.fixedPosition]: fixedPosition,
      [styles.relativePosition]: !fixedPosition && !expand,
      [styles.allCornersRound]: allCornersRound,
      [styles.oppositeCornersRound]: !allCornersRound,
      [styles[`background${color}`]]: !invertColor,
      [styles[`border${color}`]]: invertColor
    })}>
      <div className={styles.iconContainer}>
        <Icon
          className={classNames(styles.icon, { [styles[`color${color}`]]: invertColor })}
          fontSize="inherit"
        />
      </div>
      {
        expand &&
        <span
          className={classNames(styles.text, { [styles[`color${color}`]]: invertColor })}
        >
          {text}
        </span>
      }
    </div>
  </Tooltip>
);

export interface ILabelLayoutProps {
  className?: string;
  useTooltip: boolean;
  fixedPosition: boolean;
  expand?: boolean;
  allCornersRound: boolean;
  invertColor?: boolean;
}

export interface ILabelTextProps {
  text: string;
  tooltipText: string;
}

interface ILabelProps extends ILabelLayoutProps, ILabelTextProps {
  Icon: FunctionComponent<SvgIconProps>;
  color: "Red" | "Green" | "DarkYellow";
}
