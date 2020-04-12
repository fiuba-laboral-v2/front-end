import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { FormSet } from "$components/FormSet";
import { IEditableDetailValues } from "./interface";
import { CareerSelector } from "$components/CareerSelector";
import { Subtitle } from "$components/Subtitle";
import { CapabilitiesSelector } from "$components/CapabilitiesSelector";
import { FormikValidator } from "$models/FormikValidator";
import { validateName, validateURL } from "validations-fiuba-laboral-v2";

const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    initialValues,
    onSubmit,
    translations
  }) => {
  const formName = "editApplicantDetailForm";
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validateOnMount={true}
          onSubmit={onSubmit}
          validate={() => ({})}
        >
          {({ values, isValid, isSubmitting }) => (
            <div className={styles.body}>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <TextInput
                  name={"name"}
                  label={translations.name}
                  validate={FormikValidator({ validator: validateName, mandatory: true })}
                />
                <TextInput
                  name={"surname"}
                  label={translations.surname}
                  validate={FormikValidator({ validator: validateName, mandatory: true })}
                />
                <FormSet
                  title={translations.links}
                  name={"links"}
                  values={values.links}
                  defaultValue={{ url: "", name: "", uuid: "" }}
                  fields={(value, index) => (
                    <>
                      <TextInput
                        name={`links.${index}.url`}
                        label={translations.link}
                        type="url"
                        className={styles.link}
                        validate={FormikValidator({ validator: validateURL, mandatory: true })}
                      />
                      <TextInput
                        name={`links.${index}.name`}
                        label={translations.linkTitle}
                        className={styles.linkTitle}
                        validate={FormikValidator({ mandatory: true })}
                      />
                    </>
                  )}
                />
                <FormSet
                  title={translations.careers}
                  name={"careers"}
                  values={values.careers}
                  defaultValue={{ code: "", creditsCount: 0 }}
                  fields={(value, index) => (
                    <CareerSelector key={index} index={index} value={value}/>
                  )}
                />
                <Subtitle>{translations.capabilities}</Subtitle>
                <CapabilitiesSelector label={translations.capability}/>
                <FormSet
                  title={translations.sections}
                  name={"sections"}
                  values={values.sections}
                  defaultValue={{
                    title: "",
                    text: "",
                    displayOrder: Math.max(
                      ...values.sections.map(({ displayOrder }) => displayOrder)
                    ) + 1
                  }}
                  fields={(value, index) => (
                    <>
                      <TextInput
                        name={`sections.${index}.title`}
                        label={translations.sectionTitle}
                        validate={FormikValidator({ mandatory: true })}
                      />
                      <TextInput
                        name={`sections.${index}.text`}
                        label={translations.sectionContent}
                        validate={FormikValidator({ mandatory: true })}
                      />
                    </>
                  )}
                />
              </Form>
              <div className={styles.footer}>
                <Button
                  form={formName}
                  className="primary"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  {translations.submit}
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
  initialValues: IEditableDetailValues;
  onSubmit: (applicant: IEditableDetailValues) => void;
  translations: IApplicantDetailEditableTranslations;
}

interface IApplicantDetailEditableTranslations {
  title: string;
  name: string;
  surname: string;
  links: string;
  link: string;
  linkTitle: string;
  careers: string;
  capabilities: string;
  capability: string;
  sections: string;
  sectionTitle: string;
  sectionContent: string;
  submit: string;
}

export { EditableDetail };
