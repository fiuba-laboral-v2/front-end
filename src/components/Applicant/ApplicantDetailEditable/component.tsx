import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { IApplicantDetailEditableProps } from "./interface";
import { FieldEditable } from "$components/FieldEditable";
import { FormFooter } from "$components/FormFooter";
import { CapabilitiesEditable } from "$components/Capabilities/CapabilitiesEditable";
import { CareersEditable } from "$components/Career/CareersEditable";
import { ICareer } from "$interfaces/Applicant";

const ApplicantDetailEditable: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit,
    onCancel,
    setState,
    state,
    deleteCapability,
    deleteCareer
  }) => {
  const setCapabilities = (newCapability: string | number) => {
    const mergedCapabilities = applicant.capabilities || [];
    if (mergedCapabilities.findIndex(item => item.description === newCapability) >= 0) return;

    state.capabilities = state.capabilities || [];
    state.capabilities.push({ uuid: "", description: String(newCapability) });
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setCareer = (career: ICareer) => {
    const mergedCareers = applicant.careers || [];
    if (mergedCareers.findIndex((item: ICareer) => item.code === career.code) >= 0) return;

    state.careers = state.careers || [];
    state.careers.push(career);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  return (
    <DetailMainContainer>
      <div className={styles.columnContainer}>
        <FieldEditable
          defaultField={applicant.name}
          setField={newName => setState({...state, name: newName})}
          fieldName={translations.name}
        />
        <FieldEditable
          defaultField={applicant.surname}
          setField={newSurname => setState({...state, surname: newSurname})}
          fieldName={translations.lastName}
        />
        <FieldEditable
          defaultField={applicant.description}
          setField={newDescription => setState({...state, description: newDescription})}
          fieldName={translations.description}
        />
      </div>
      <div className={styles.rowContainer}>
        <CapabilitiesEditable
          deleteCapability={deleteCapability}
          setList={setCapabilities}
          capabilities={applicant.capabilities || []}
        />
        <div className={styles.separator}/>
        <CareersEditable
          deleteCareer={deleteCareer}
          careers={applicant.careers}
          setCareer={setCareer}
        />
      </div>
      <FormFooter onSubmit={() => onSubmit(state)} onCancel={onCancel}/>
    </DetailMainContainer>
  );
};

export { ApplicantDetailEditable };
