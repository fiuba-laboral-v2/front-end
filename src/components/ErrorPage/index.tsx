import React, { FunctionComponent, ReactElement } from "react";
import { Title } from "$components/Title";
import { Button } from "$components/Button";
import { Window } from "$models/Window";
import styles from "./styles.module.scss";

export const ErrorPage: FunctionComponent<IErrorPageProps> = ({
  title,
  icon,
  buttonMessage = "Ir a la página principal"
}) => (
  <section className={styles.error}>
    <Title>{title}</Title>
    <div className={styles.imgSrc}>{icon}</div>
    <Button onClick={Window.goHome} kind="primary">
      {buttonMessage}
    </Button>
  </section>
);

interface IErrorPageProps {
  title: string;
  buttonMessage?: string;
  icon: ReactElement;
}
