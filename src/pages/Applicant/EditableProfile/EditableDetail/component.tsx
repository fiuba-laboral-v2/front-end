import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICapability, ICareer } from "$interfaces/Applicant";
import { IApplicant } from "$interfaces/Applicant";
import { IApplicantDetailEditableProps } from "./interface";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FieldArray, Form, Formik } from "formik";
import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { FormSet } from "$components/FormSet";
import { FieldSet } from "$components/FieldSet";
import { EditableCapabilities } from "../EditableCapabilities";
import { EditableCareers } from "../EditableCareers";

const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit,
    onCancel,
    setApplicant,
    deleteCapability,
    deleteCareer,
    loading
  }) => {
  if (loading) return <LoadingSpinner />;

  const formName = "editApplicantDetailForm";
  const setCapabilities = (newCapability: string) => {
    applicant.capabilities = applicant.capabilities || [];
    if (
      applicant.capabilities
        .map(({ description }: ICapability) => description)
        .includes(newCapability)
    ) return;

    applicant.capabilities.push({ uuid: "", description: String(newCapability) });
    return setApplicant({ ...applicant, capabilities: applicant.capabilities });
  };

  const setCareer = (career: ICareer) => {
    applicant.careers = applicant.careers || [];
    if (
      applicant.careers
        .map(({ code }: ICareer) => code)
        .includes(career.code)
    ) return;

    applicant.careers.push(career);
    return setApplicant({ ...applicant, careers: applicant.careers });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>Editar tu perfil</h1>
        <Formik
          initialValues={applicant}
          isInitialValid={false}
          onSubmit={onSubmit}
          validate={(values: IApplicant) => values}
        >
          {({ values, isValid, isSubmitting }) => (
            <div className={styles.body}>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <FieldArray
                  name="links"
                  render={arrayHelpers => (
                    <div>
                      <FormSet title="Links" onClick=
                        {() => arrayHelpers.insert(values.links.length + 1, "")}
                      />
                      {values.links.map((link, index) => (
                        <FieldSet key={index} onClick={() => arrayHelpers.remove(index)}>
                          <TextInput
                            name={`links[${index}].link`}
                            label={"link"}
                            type="url"
                            inputProps={{ defaultValue: link.url }}
                            className={styles.link}
                          />
                          <TextInput
                            name={`links[${index}].title`}
                            label={"Titulo"}
                            type="text"
                            inputProps={{ defaultValue: link.name }}
                            className={styles.linkTitle}
                          />
                        </FieldSet>
                      ))}
                    </div>
                  )}
                />
                <div className={styles.capabilitiesAndCareersContainer}>
                  <EditableCapabilities
                    deleteCapability={deleteCapability}
                    addCapability={setCapabilities}
                    capabilities={applicant.capabilities}
                  />
                  <div className={styles.separator} />
                  <EditableCareers
                    deleteCareer={deleteCareer}
                    careers={applicant.careers}
                    setCareer={setCareer}
                  />
                </div>
              </Form>
              <div className={styles.footer}>
                <Button
                  form={formName}
                  className="primary"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  Guardar
                </Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export { EditableDetail };
