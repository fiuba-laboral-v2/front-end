import React, { FunctionComponent } from "react";
import { Description } from "$components/Description";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles.module.scss";
import { IEmptyDetailTranslations } from "./interfaces";

export const EmptyDetail: FunctionComponent<IEmptyDetailProps> = ({ translations }) => (
  <div className={styles.emptyDetail}>
    <ArrowBackIcon className={styles.selectToStartArrow} />
    <Description>{translations.selectToStart}</Description>
  </div>
);

interface IEmptyDetailProps {
  translations: IEmptyDetailTranslations;
}
