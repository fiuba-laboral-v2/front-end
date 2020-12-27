import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { SvgIconProps } from "@material-ui/core/SvgIcon/SvgIcon";

export const EnterButton: FunctionComponent<IComponentProps> = (
  {
    className,
    link,
    label,
    Icon
  }
) => (
  <Card className={classNames(className, styles.card)} link={link}>
    <Icon className={styles.cardLogo} fontSize="large"/>
    <Subtitle className={styles.cardText}>{label}</Subtitle>
  </Card>
);

interface IComponentProps {
  className?: string;
  link: string;
  label: string;
  Icon: FunctionComponent<SvgIconProps>;
}
