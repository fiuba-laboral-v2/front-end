import React, { FunctionComponent } from "react";
import { TaskHeaderInfo } from "../../../TaskHeaderInfo";
import { ICompany } from "$interfaces/Company";
import styles from "./styles.module.scss";
import { NumberFormatter } from "$models/NumberFormatter";

export const OfferDetails: FunctionComponent<IOfferDetailsProps> = ({
  company: { cuit },
  translations
}) => (
  <div className={styles.userDetails}>
    <TaskHeaderInfo title={translations.cuit} value={NumberFormatter.formatCuit(cuit)} />
  </div>
);

interface IOfferDetailsProps {
  company: ICompany;
  translations: {
    cuit: string;
  };
}
