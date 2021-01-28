import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const FiubaLogo: FunctionComponent<IComponentProps> = ({ className, imageClassName }) => (
  <div className={classNames(className, styles.logoContainer)}>
    <img
      src={"images/logo.svg"}
      alt="Logo de FIUBA"
      className={classNames(imageClassName, styles.logo)}
      draggable={false}
    />
  </div>
);

interface IComponentProps {
  imageClassName?: string;
  className?: string;
}
