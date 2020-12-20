import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { IHeaderProps } from "./interfaces";
import classNames from "classnames";

export const Header: FunctionComponent<IHeaderProps> = ({ className, title, subtitle }) => (
  <div className={classNames(className, styles.container)}>
    <h1 className={classNames(styles.title, { [styles.noMargin]: !subtitle })}>{title}</h1>
    <Subtitle>{subtitle}</Subtitle>
  </div>
);
