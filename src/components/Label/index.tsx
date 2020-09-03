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
    transparentBackground,
    expandHorizontally,
    horizontalLayout,
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
      [styles.relativePosition]: !fixedPosition && !horizontalLayout,
      [styles.expandHorizontally]: expandHorizontally && !fixedPosition,
      [styles.allCornersRound]: allCornersRound,
      [styles.oppositeCornersRound]: !allCornersRound,
      [styles[`background${color}`]]: !transparentBackground,
      [styles[`transparentBackground${color}`]]: transparentBackground
    })}>
      {
        horizontalLayout &&
        <span
          className={classNames(styles.text, { [styles[`color${color}`]]: transparentBackground })}
        >
          {text}
        </span>
      }
      <div className={styles.iconContainer}>
        <Icon
          className={classNames(styles.icon, { [styles[`color${color}`]]: transparentBackground })}
          fontSize="inherit"
        />
      </div>
    </div>
  </Tooltip>
);

export interface ILabelLayoutProps {
  className?: string;
  useTooltip: boolean;
  fixedPosition: boolean;
  horizontalLayout?: boolean;
  expandHorizontally?: boolean;
  allCornersRound: boolean;
  transparentBackground?: boolean;
}

export interface ILabelTextProps {
  text: string;
  tooltipText: string;
}

interface ILabelProps extends ILabelLayoutProps, ILabelTextProps {
  Icon: FunctionComponent<SvgIconProps>;
  color: "Red" | "Green" | "DarkYellow";
}
