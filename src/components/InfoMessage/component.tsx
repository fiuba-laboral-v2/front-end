import React from "react";
import classnames from "classnames";
import InfoIcon from "@material-ui/icons/InfoOutlined";

import { Card } from "$components/Card";
import { IInfoMessageProps } from "./interface";

import styles from "./styles.module.scss";

export const InfoMessage = ({ className, message }: IInfoMessageProps) => (
  <Card className={classnames(className, styles.card)}>
    <InfoIcon fontSize="small" className={styles.icon} />
    {message}
  </Card>
);
