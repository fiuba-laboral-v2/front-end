import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Title } from "$components/Title";
import Button from "$components/Button";
import { Window } from "$components/Window";

import { RoutesBuilder } from "$models/RoutesBuilder";
import logo from "./logo.svg";
import styles from "./styles.module.scss";

export const InternalServerError: FunctionComponent = () => (
  <Window>
    <section className={styles.internalServerError}>
      <Title title="Esta página ha dejado de funcionar"/>
      <img className={styles.logo} src={logo} alt="internal server error"/>
      <Link to={RoutesBuilder.applicant.home}>
        <Button className="primary">Cargar de nuevo</Button>
      </Link>
    </section>
  </Window>
);
