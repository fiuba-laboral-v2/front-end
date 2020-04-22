import React, { FunctionComponent } from "react";
import { Headline } from "$components/Headline";
import Button from "$components/Button";
import styles from "./styles.module.scss";

export const ErrorPage: FunctionComponent<IErrorPageProps> = (
  {
    errorType,
    title,
    imgSrc,
    buttonMessage,
    onClickButton
  }
) => (
  <section className={styles.error}>
    <Headline color="dark">{title}</Headline>
    <img className={styles.imgSrc} src={imgSrc} alt={errorType}/>
    <Button onClick={onClickButton} className="primary">{buttonMessage}</Button>
  </section>
);

interface IErrorPageProps {
  errorType: string;
  title: string;
  imgSrc: string;
  buttonMessage: string;
  onClickButton: () => void;
}
