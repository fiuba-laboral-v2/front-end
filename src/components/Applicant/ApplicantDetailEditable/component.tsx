import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { IApplicantDetailEditableProps } from "./interface";
import { FieldEditable } from "$components/FieldEditable";
import { FormFooter } from "$components/FormFooter";
import { CapabilitiesEditable } from "$components/Capabilities/CapabilitiesEditable";
import { CareersEditable } from "$components/Career/CareersEditable";
import { ICapability, ICareer } from "$interfaces/Applicant";

const ApplicantDetailEditable: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit,
    onCancel,
    setState,
    deleteCapability,
    deleteCareer
  }) => {
  const setCapabilities = (newCapability: string) => {
    applicant.capabilities = applicant.capabilities || [];
    if (applicant.capabilities
      .map(({ description }: ICapability) => description)
      .includes(newCapability)
    ) return;

    applicant.capabilities.push({ uuid: "", description: String(newCapability) });
    return setState({ ...applicant, capabilities: applicant.capabilities });
  };

  const setCareer = (career: ICareer) => {
    applicant.careers = applicant.careers || [];
    if (
      applicant.careers
        .map(({ code }: ICareer) => code)
        .includes(career.code)
    ) return;

    applicant.careers.push(career);
    return setState({ ...applicant, careers: applicant.careers });
  };

  return (
    <DetailMainContainer>
      <div className={styles.columnContainer}>
        <FieldEditable
          defaultField={applicant.name}
          setField={newName => setState({...applicant, name: newName})}
          fieldName={translations.name}
        />
        <FieldEditable
          defaultField={applicant.surname}
          setField={newSurname => setState({...applicant, surname: newSurname})}
          fieldName={translations.lastName}
        />
        <FieldEditable
          defaultField={applicant.description}
          setField={newDescription => setState({...applicant, description: newDescription})}
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
          careers={applicant.careers || []}
          setCareer={setCareer}
        />
      </div>
      <FormFooter onSubmit={() => onSubmit(applicant)} onCancel={onCancel}/>
    </DetailMainContainer>
  );
};

export { ApplicantDetailEditable };
