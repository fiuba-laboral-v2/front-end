import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Title } from "$components/Title";
import Button from "$components/Button";
import styles from "./styles.module.scss";

export const ErrorPage: FunctionComponent<IErrorPageProps> = (
  {
    errorType,
    title,
    imgSrc,
    imageSize,
    buttonMessage,
    onClickButton
  }
) => (
  <section className={styles.error}>
    <Title title={title}/>
    <img className={classNames(styles.imgSrc, styles[imageSize])} src={imgSrc} alt={errorType}/>
    <Button onClick={onClickButton} className="primary">{buttonMessage}</Button>
  </section>
);

interface IErrorPageProps {
  errorType: string;
  title: string;
  imgSrc: string;
  imageSize: "small" | "large";
  buttonMessage: string;
  onClickButton: () => void;
}
