import React, { FunctionComponent } from "react";
import { TaskHeaderInfo } from "../../../../../../components/TaskHeaderInfo";
import styles from "./styles.module.scss";
import { NumberFormatter } from "$models/NumberFormatter";

export const OfferDetails: FunctionComponent<IOfferDetailsProps> = ({ cuit, translations }) => (
  <div className={styles.userDetails}>
    <TaskHeaderInfo title={translations.cuit} value={NumberFormatter.formatCuit(cuit)} />
  </div>
);

interface IOfferDetailsProps {
  cuit: string;
  translations: {
    cuit: string;
  };
}
