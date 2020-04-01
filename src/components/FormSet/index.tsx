import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { AddButton } from "$components/AddButton";

const FormSet: FunctionComponent<IFormSetProps> = (
  {
    title,
    onClick
  }) => (
  <div>
    <div className={styles.header}>
      <Subtitle>{title}</Subtitle>
      <AddButton onClick={(onClick)
      }/>
    </div>
  </div>
);

export interface IFormSetProps {
  title: string;
  onClick: () => void;
}

export { FormSet };
