import React, { FunctionComponent, useState } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { IApplicantDetailEditableProps } from "./interface";
import { ICapability, ICareer } from "../ApplicantDetail/interface";
import { FieldEditable } from "$components/FieldEditable";

const ApplicantDetailEditable: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit,
    onCancel
  }) => {
  const [state, setState] = useState({
    name: applicant.name,
    surname: applicant.surname,
    padron: applicant.padron,
    description: applicant.description,
    capabilities: applicant.capabilities,
    careers: applicant.careers
  });

  const setName = (newName: string | number) => {
    state.name = String(newName);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setSurname = (newSurname: string | number) => {
    state.surname = String(newSurname);
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
      <div className={styles.columnContainer}>
        <FieldEditable defaultField={state.name} setField={setName} fieldName={"Nombre"}/>
        <FieldEditable defaultField={state.surname} setField={setSurname} fieldName={"Apellido"}/>
        <FieldEditable defaultField={state.description} setField={setDescription} fieldName={"Descripcion"}/>
      </div>
      <div className={styles.rowContainer}>
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
        <button className={styles.submitButton} onClick={onCancel}>
          cancel
        </button>
        <button className={styles.submitButton} onClick={() => onSubmit(state)}>
          save
        </button>
      </div>
    </DetailMainContainer>
  );
};

export { ApplicantDetailEditable };
