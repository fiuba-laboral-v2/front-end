import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Subtitle } from "$components/Subtitle";
import Button from "$components/Button";

import { RoutesBuilder } from "$models/RoutesBuilder";
import desktopLogo from "./desktop500.jpg";
import mobileLogo from "./mobile500.png";
import styles from "./styles.module.scss";

export const InternalServerError: FunctionComponent = () => (
  <section className={styles.internalServerError}>
    <img className={styles.mobileLogo} src={mobileLogo} alt="internal server error"/>
    <img className={styles.desktopLogo} src={desktopLogo} alt="internal server error"/>
    <section className={styles.body}>
      <Subtitle className={styles.title}>Esta página ha dejado de funcionar</Subtitle>
      <span className={styles.messageError}>HTTP ERROR 500</span>
      <Link to={RoutesBuilder.applicant.home}>
        <Button className="primary">Cargar de nuevo</Button>
      </Link>
    </section>
  </section>
);
