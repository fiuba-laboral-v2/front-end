import React, { FunctionComponent, useState } from "react";
import styles from "./styles.module.scss";
import { DetailHeadline } from "$components/Detail/DetailHeadline";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { IApplicantDetailEditableProps } from "./interface";
import { ICapability, ICareer } from "../ApplicantDetail/interface";
import { FieldEditable } from "$components/FieldEditable";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescription } from "$components/Detail/DetailDescription";

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

  const setPadron = (newPadron: string | number) => {
    state.padron = Number(newPadron);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setDescription = (newDescription: string | number) => {
    state.description = String(newDescription);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  return (
    <DetailMainContainer>
      <div className={styles.header}>
        <div className={styles.fullNameContainer}>
          <DetailHeadline headline={`${state.name} ${state.surname}`}/>
        </div>
        <div className={styles.padronContainer}>
          <span className={styles.padronTitle}>{translations.padron}:</span>
          <FieldEditable defaultField={state.padron} setField={setPadron}>
            <DetailByLine byLine={state.padron}/>
          </FieldEditable>
        </div>
        <div className={styles.descriptionContainer}>
          <FieldEditable defaultField={state.description} setField={setDescription}>
            <DetailDescription description={state.description}/>
          </FieldEditable>
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
