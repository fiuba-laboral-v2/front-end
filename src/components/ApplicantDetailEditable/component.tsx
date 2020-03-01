import React, { FunctionComponent, useState } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { IApplicantDetailEditableProps } from "./interface";
import { FieldEditable } from "$components/FieldEditable";
import { FormFooter } from "$components/FormFooter";
import { CapabilitiesDetail } from "$components/CapabilitiesDetail";
import { CareersDetail } from "$components/CareersDetail";

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
        <FieldEditable
          defaultField={state.name}
          setField={setName}
          fieldName={"Nombre"}
        />
        <FieldEditable
          defaultField={state.surname}
          setField={setSurname}
          fieldName={"Apellido"}
        />
        <FieldEditable
          defaultField={state.description}
          setField={setDescription}
          fieldName={"Descripcion"}
        />
      </div>
      <div className={styles.rowContainer}>
        <CapabilitiesDetail
          title={translations.capabilities}
          capabilities={state.capabilities}
        />
        <CareersDetail
          careers={state.careers}
          capabilitiesTitle={translations.careers}
          creditsTitle={translations.credits}
        />
      </div>
      <FormFooter onSubmit={() => onSubmit(state)} onCancel={onCancel}/>
    </DetailMainContainer>
  );
};

export { ApplicantDetailEditable };
