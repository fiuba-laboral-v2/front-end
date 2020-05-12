import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";

import styles from "./styles.module.scss";
import { ISignUpFormValues } from "./interface";

import Button from "../../../components/Button";
import { Window } from "../../../components/Window";
import TextInput from "../../../components/TextInput";

import { FormikValidator } from "../../../models/FormikValidator";

import {
  validateCuit,
  validateEmail,
  validateName,
  validatePassword,
  validateURL
} from "validations-fiuba-laboral-v2";

const formName = "signUpForm";

const SignUp: FunctionComponent<ISignUpProps> = ({ onSubmit }) => {
  const initialValues: ISignUpFormValues = {
    user: {
      email: "",
      password: "",
      name: "",
      surname: ""
    },
    companyName: "",
    cuit: "",
    slogan: "",
    description: "",
    logo: "",
    website: "",
    _form: "",
    passwordConfirm: ""
  };

  return (
    <Window>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{"tiiitlee"}</h1>
        <Formik
          initialValues={initialValues}
          validateOnMount={true}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting, errors }) => (
            <>
              <Form id={formName}>
                <TextInput
                  name="user.email"
                  label={"emailllll"}
                  type="email"
                  className={styles.textInput}
                  validate={FormikValidator({ validator: validateEmail, mandatory: true })}
                />
                <TextInput
                  name="user.password"
                  label={"passworddddd"}
                  type="password"
                  className={styles.textInput}
                  validate={FormikValidator({ validator: validatePassword, mandatory: true })}
                />
                <TextInput
                  name="passwordConfirm"
                  label={"passwordConfirmmmmm"}
                  type="password"
                  className={styles.textInput}
                />
                <TextInput
                  name="user.name"
                  label={"nameeeee"}
                  className={styles.textInput}
                  validate={FormikValidator({ validator: validateName, mandatory: true })}
                />
                <TextInput
                  name="user.surname"
                  label={"surnameeeeee"}
                  className={styles.textInput}
                  validate={FormikValidator({ validator: validateName, mandatory: true })}
                />
                <TextInput
                  name="companyName"
                  label={"companyNameeeeee"}
                  validate={FormikValidator({ validator: validateName, mandatory: true })}
                />
                <TextInput
                  name="cuit"
                  label={"cuitttttt"}
                  validate={FormikValidator({ validator: validateCuit, mandatory: true })}
                />
                <TextInput
                  name="slogan"
                  label={"slogannnnnn"}
                />
                <TextInput
                  name="description"
                  label={"descriptionnnn"}
                />
                <TextInput
                  name="website"
                  label={"websiteeeee"}
                  validate={FormikValidator({ validator: validateURL, mandatory: true })}
                />
              </Form>
              <Button
                form={formName}
                className="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {"submeeeeeeet"}
              </Button>
            </>
          )}
        </Formik>
      </div>
    </Window>
  );
};

interface ISignUpProps {
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}

export { SignUp };
