import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Link } from "react-router-dom";

export const FiubaLogo: FunctionComponent<IComponentProps> = ({ className, imageClassName }) => (
  <Link to={RoutesBuilder.public.home()} className={classNames(className, styles.logoContainer)}>
    <img
      src={"images/logo.svg"}
      alt="Logo de FIUBA"
      className={classNames(imageClassName, styles.logo)}
      draggable={false}
    />
  </Link>
);

interface IComponentProps {
  imageClassName?: string;
  className?: string;
}
