import React, { FunctionComponent } from "react";

import classNames from "classnames";

import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";

import styles from "./styles.module.scss";
import { SvgIconProps } from "@material-ui/core/SvgIcon/SvgIcon";

export const EnterButton: FunctionComponent<IComponentProps> = (
  {
    className,
    onClick,
    label,
    Icon
  }
) => (
  <Card className={classNames(className, styles.card)} onClick={onClick}>
    <Icon className={styles.cardLogo} fontSize="large"/>
    <Subtitle className={styles.cardText}>{label}</Subtitle>
  </Card>
);

interface IComponentProps {
  className?: string;
  onClick: () => void;
  label: string;
  Icon: FunctionComponent<SvgIconProps>;
}
