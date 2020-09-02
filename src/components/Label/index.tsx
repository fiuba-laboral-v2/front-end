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
    expand,
    color
  }
) => (
  <Tooltip
    title={tooltipText}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !useTooltip }) }}
  >
    <div className={classNames(styles.tag, styles[color], className, {
      [styles.fixedPosition]: fixedPosition,
      [styles.relativePosition]: !fixedPosition && !expand,
      [styles.expand]: expand
    })}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} fontSize="inherit" />
      </div>
      {expand && <span className={styles.text}>{text}</span>}
    </div>
  </Tooltip>
);

export interface ILabelLayoutProps {
  className?: string;
  useTooltip: boolean;
  fixedPosition: boolean;
  expand: boolean;
}

export interface ILabelTextProps {
  text: string;
  tooltipText: string;
}

interface ILabelProps extends ILabelLayoutProps, ILabelTextProps {
  Icon: FunctionComponent<SvgIconProps>;
  color: "red" | "green" | "darkYellow";
}
