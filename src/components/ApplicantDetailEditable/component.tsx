import React, { FunctionComponent, useState } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { IApplicantDetailEditableProps } from "./interface";
import { FieldEditable } from "$components/FieldEditable";
import { FormFooter } from "$components/FormFooter";
import { CareersDetail } from "$components/CareersDetail";
import { ListEditable } from "$components/ListEditable";
import { ICapability } from "$interfaces/Applicant";

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
    capabilities: Array<ICapability>(),
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

  const setCapabilities = (newCapability: string | number) => {
    state.capabilities?.push({ description: String(newCapability) });
    state.capabilities = state.capabilities?.filter((item: ICapability, index) => {
      return state.capabilities
        .map((capability: ICapability) => capability.description)
        .indexOf(item.description) === index;
    });
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const mergeCapabilities = () => {
    const clone1 = Object.assign([], applicant.capabilities);
    const clone2 = Object.assign([], state.capabilities);
    const capabilities = [...clone1, ...clone2];
    return capabilities.map((capability: ICapability) => capability.description);
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
        <ListEditable
          list={mergeCapabilities()}
          setList={setCapabilities}
          title={translations.capabilities}
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
