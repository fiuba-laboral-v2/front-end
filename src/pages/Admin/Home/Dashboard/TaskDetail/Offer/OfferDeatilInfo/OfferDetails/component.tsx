import React, { FunctionComponent } from "react";
import { TaskHeaderInfo } from "../../../TaskHeaderInfo";
import { ICompany } from "$interfaces/Company";
import styles from "./styles.module.scss";

export const OfferDetails: FunctionComponent<IOfferDetailsProps> = ({
  company: { cuit },
  translations
}) => (
  <div className={styles.userDetails}>
    <TaskHeaderInfo title={translations.cuit} value={cuit} />
  </div>
);

interface IOfferDetailsProps {
  company: ICompany;
  translations: {
    cuit: string;
  };
}
