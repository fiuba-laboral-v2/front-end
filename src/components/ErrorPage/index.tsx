import React, { FunctionComponent } from "react";
import { Title } from "$components/Title";
import Button from "$components/Button";
import styles from "./styles.module.scss";

export const ErrorPage: FunctionComponent<IErrorPageProps> = (
  {
    errorType,
    title,
    imgSrc,
    buttonMessage,
    goTo
  }
) => (
  <section className={styles.error}>
    <Title title={title}/>
    <img className={styles.imgSrc} src={imgSrc} alt={errorType}/>
    <Button onClick={goTo} className="primary">{buttonMessage}</Button>
  </section>
);

interface IErrorPageProps {
  errorType: string;
  title: string;
  imgSrc: string;
  buttonMessage: string;
  goTo: () => void;
}
