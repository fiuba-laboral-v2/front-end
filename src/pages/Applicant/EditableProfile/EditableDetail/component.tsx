import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { FormSet } from "$components/FormSet";
import { IEditableDetailValues } from "./interface";
import { CareerSelector } from "$components/CareerSelector";

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
          validate={(values: IEditableDetailValues) => values}
        >
          {({ values, isValid, isSubmitting }) => (
            <div className={styles.body}>
              <div style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
                {JSON.stringify(values, null, "  ")}
              </div>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <FormSet
                  title={translations.links}
                  name={"links"}
                  values={values.links}
                  defaultValue={{ url: "", name: "", uuid: "" }}
                  fields={(value, index) => (
                    <>
                      <TextInput
                        name={`links[${index}].url`}
                        label={translations.link}
                        type="url"
                        className={styles.link}
                      />
                      <TextInput
                        name={`links[${index}].name`}
                        label={translations.linkTitle}
                        type="text"
                        className={styles.linkTitle}
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
  links: string;
  link: string;
  linkTitle: string;
  careers: string;
  submit: string;
}

export { EditableDetail };
