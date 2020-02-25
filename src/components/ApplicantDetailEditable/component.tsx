import React, { FunctionComponent } from "react";
import styles from "../ApplicantDetail/styles.module.scss";
import { DetailHeadline } from "$components//Detail/DetailHeadline";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescriptionEditable } from "$components/DetailDescriptionEditable";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";

const ApplicantDetailEditable: FunctionComponent = () => (
  <DetailMainContainer>
    <div className={styles.header}>
      <div className={styles.fullNameContainer}>
        <DetailHeadline headline={"Sebastian Blanco"}/>
      </div>
      <div className={styles.padronContainer}>
        <span className={styles.padronTitle}>{"Padron"}:</span>
        <DetailByLine byLine={98539}/>
      </div>
      <div className={styles.descriptionContainer}>
        <DetailDescriptionEditable/>
      </div>
    </div>
    <div className={styles.info}>
      <ApplicantItemsDetail
        items={["Python", "Node"]}
        title={"Aptitudes"}
      />
      <ApplicantItemsDetail
        items={["Carrera 1 - 3"]}
        title={"Carreras"}
        itemSuffix={"Creditos"}
      />
    </div>
  </DetailMainContainer>
);

export { ApplicantDetailEditable };
