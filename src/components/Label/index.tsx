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
    color
  }
) => (
  <Tooltip
    title={tooltipText}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !tooltipText }) }}
  >
    <div className={classNames(styles.tag, className, styles[shape], {
      [styles[`transparentBackground${color}`]]: withoutBackground,
      [styles[`background${color}`]]: !withoutBackground
    })}>
      {
        shape === "rectangular" &&
        <span
          className={classNames(styles.text, { [styles[`color${color}`]]: withoutBackground })}
        >
          {text}
        </span>
      }
      <div className={styles.iconContainer}>
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
