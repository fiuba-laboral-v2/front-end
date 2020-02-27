import React, { FunctionComponent, useState } from "react";
import styles from "./styles.module.scss";
import { DetailHeadline } from "$components/Detail/DetailHeadline";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescriptionEditable } from "$components/Detail/DetailDescriptionEditable";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { IApplicantDetailEditableProps } from "./interface";
import { ICapability, ICareer } from "../ApplicantDetail/interface";

const ApplicantDetailEditable: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit
  }) => {
  const [state, setState] = useState({
    name: applicant.name,
    surname: applicant.surname,
    padron: applicant.padron,
    description: applicant.description,
    capabilities: applicant.capabilities,
    careers: applicant.careers
  });
  return (
    <DetailMainContainer>
      <div className={styles.header}>
        <div className={styles.fullNameContainer}>
          <DetailHeadline headline={`${state.name} ${state.surname}`}/>
        </div>
        <div className={styles.padronContainer}>
          <span className={styles.padronTitle}>{translations.padron}:</span>
          <DetailByLine byLine={state.padron}/>
        </div>
        <div className={styles.descriptionContainer}>
          <DetailDescriptionEditable
            defaultDescription={state.description}
            setDescription={(newDescription: string) => {
              state.description = newDescription;
              setState(state);
            }}
          />
        </div>
      </div>
      <div className={styles.info}>
        <ApplicantItemsDetail
          items={state.capabilities?.map((capability: ICapability) => capability.description)}
          title={translations.capabilities}
        />
        <ApplicantItemsDetail
          items={
            state.careers?.map((career: ICareer) =>
              `${career.code} - ${career.description}: ${career.credits}`
            )
          }
          title={translations.careers}
          itemSuffix={translations.credits}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.separator}/>
        <button className={styles.submitButton} onClick={() => onSubmit(state)}>
          save
        </button>
      </div>
    </DetailMainContainer>
  );
};

export { ApplicantDetailEditable };
