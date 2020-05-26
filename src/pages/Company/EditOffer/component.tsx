import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { ITranslations } from "./interface";
import styles from "../SignUp/styles.module.scss";

export const EditOffer: FunctionComponent<IEditOfferProps> = ({ translations }) => {
  return (
    <Window>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.formTitle}</h1>
      </div>
    </Window>
  );
};

interface IEditOfferProps {
  translations: ITranslations;
}
