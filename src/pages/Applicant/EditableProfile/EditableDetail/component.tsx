import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApplicant, ICapability } from "$interfaces/Applicant";
import { Form, Formik } from "formik";
import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { FormSet } from "$components/FormSet";
import { EditableCapabilities } from "../EditableCapabilities";

const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    onSubmit,
    setApplicant,
    deleteCapability,
    translations
  }) => {
  const formName = "editApplicantDetailForm";
  const setCapabilities = (newCapability: string) => {
    if (
      applicant
        .capabilities
        .map(({ description }: ICapability) => description)
        .includes(newCapability)
    ) {
      return;
    }

    applicant.capabilities.push({ uuid: "", description: String(newCapability) });
    return setApplicant({ ...applicant, capabilities: applicant.capabilities });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={applicant}
          isInitialValid={false}
          onSubmit={onSubmit}
          validate={(values: IApplicant) => values}
        >
          {({ values, isValid, isSubmitting }) => (
            <div className={styles.body}>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <FormSet
                  title={"Links"}
                  name={"links"}
                  values={values.links}
                  defaultValue={{ link: "", title: "" }}
                  fields={(value, index) => (
                    <>
                      <TextInput
                        name={`links[${index}].link`}
                        label={"link"}
                        type="url"
                        inputProps={{ defaultValue: value.url }}
                        className={styles.link}
                      />
                      <TextInput
                        name={`links[${index}].title`}
                        label={"Titulo"}
                        type="text"
                        inputProps={{ defaultValue: value.name }}
                        className={styles.linkTitle}
                      />
                    </>
                  )}
                />
                <div className={styles.capabilitiesAndCareersContainer}>
                  <EditableCapabilities
                    deleteCapability={deleteCapability}
                    addCapability={setCapabilities}
                    capabilities={applicant.capabilities}
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

interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  onSubmit: (applicant: IApplicant) => void;
  setApplicant: (applicant: IApplicant) => void;
  deleteCapability: (description: string) => void;
  translations: IApplicantDetailEditableTranslations;
}

interface IApplicantDetailEditableTranslations {
  title: string;
}

export { EditableDetail };
