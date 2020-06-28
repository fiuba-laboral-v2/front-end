import React, { FunctionComponent } from "react";
import { Description } from "$components/Description";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles.module.scss";
import { IEmptyDetailContentTranslations } from "./interfaces";

export const EmptyDetailContent: FunctionComponent<IEmptyDetailContentProps> = (
  {
    translations
  }
) => (
  <div className={styles.emptyDetailContent}>
    <ArrowBackIcon className={styles.selectToStartArrow}/>
    <Description>{translations.selectToStart}</Description>
  </div>
);

interface IEmptyDetailContentProps {
  translations: IEmptyDetailContentTranslations;
}
