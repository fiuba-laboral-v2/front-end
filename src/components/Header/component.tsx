import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { IHeaderProps } from "./interfaces";
import classNames from "classnames";

const Header: FunctionComponent<IHeaderProps> = ({ title, subtitle }) => (
  <div className={styles.container}>
    <h1 className={classNames(styles.title, { [styles.noMargin]: !subtitle })}>{title}</h1>
    <Subtitle>{subtitle}</Subtitle>
  </div>
);

export { Header };
