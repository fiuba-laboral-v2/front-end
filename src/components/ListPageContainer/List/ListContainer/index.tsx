import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Card } from "$components/Card";
import styles from "./styles.module.scss";

export const ListContainer: FunctionComponent<IContainerProps> = ({ className, children }) => (
  <Card className={classNames(className, styles.cardContainer)}>{children}</Card>
);

interface IContainerProps {
  className?: string;
}
