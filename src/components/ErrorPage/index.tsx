import React, { FunctionComponent, ReactElement } from "react";
import { Headline } from "$components/Headline";
import { Button } from "$components/Button";
import { Window } from "$models/Window";
import styles from "./styles.module.scss";

export const ErrorPage: FunctionComponent<IErrorPageProps> = ({
  title,
  icon,
  buttonMessage = "Ir a la página principal",
  onClickButton = Window.goHome
}) => (
  <section className={styles.error}>
    <Headline color="dark">{title}</Headline>
    <div className={styles.imgSrc}>{icon}</div>
    <Button onClick={onClickButton} kind="primary">
      {buttonMessage}
    </Button>
  </section>
);

interface IErrorPageProps {
  title: string;
  buttonMessage?: string;
  onClickButton?: () => void;
  icon: ReactElement;
}
