import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { FormSet } from "$components/FormSet";
import { IEditableDetailValues } from "./interface";
import { CareerSelector } from "$components/CareerSelector";
import { MultipleSelector } from "$components/Selector/MultipleSelector";
import { ICapability } from "../../../../interfaces/Applicant";
import capitalize from "@material-ui/core/utils/capitalize";

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
                <MultipleSelector<ICapability, ICapability>
                  name={"capabilities"}
                  getOptionValue={({ uuid, description }) => (
                    { uuid, description: capitalize(description) }
                  )}
                  getOptionLabel={capability => capability.description}
                  compareValuesBy={capability => capability.description}
                  stringToValue={stringValue => ({ description: stringValue })}
                  options={values.capabilities}
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
