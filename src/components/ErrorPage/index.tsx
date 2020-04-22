import React, { FunctionComponent } from "react";

import { Link } from "react-router-dom";
import { Title } from "$components/Title";
import Button from "$components/Button";
import { Window } from "$components/Window";

import { RoutesBuilder } from "$models/RoutesBuilder";
import styles from "./styles.module.scss";

export const ErrorPage: FunctionComponent<IErrorPageProps> = (
  {
    errorType,
    title,
    logo,
    buttonMessage
  }
) => (
  <Window>
    <section className={styles.error}>
      <Title title={title}/>
      <img className={styles.logo} src={logo} alt={errorType}/>
      <Link className={styles.link} to={RoutesBuilder.applicant.home()}>
        <Button className="primary">{buttonMessage}</Button>
      </Link>
    </section>
  </Window>
);

interface IErrorPageProps {
  errorType: string;
  title: string;
  logo: string;
  buttonMessage: string;
}
