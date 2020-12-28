import React, { FunctionComponent } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "./styles.module.scss";
import { Button } from "$components/Button";

export const IconButton: FunctionComponent<IComponentProps> = ({ Icon, link }) => (
  <Button className={styles.button} link={link} kind="primary">
    <Icon fontSize="inherit" />
  </Button>
);

interface IComponentProps {
  Icon: FunctionComponent<SvgIconProps>;
  link: string;
}
