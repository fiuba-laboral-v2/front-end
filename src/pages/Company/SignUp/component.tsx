import React from "react";
import { Window } from "../../../components/Window";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { FormikValidator } from "../../../models/FormikValidator";
import { validateCuit, validateName, validateURL } from "validations-fiuba-laboral-v2";

const formName = "signUpForm";

const SignUp = () => (
  <Window>
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{"tiiitlee"}</h1>
      <Formik
        initialValues={{}}
        validateOnMount={true}
        onSubmit={alert}
      >
        {({ values, isSubmitting, errors }) => (
          <>
            <Form id={formName}>
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
                type="email"
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

export { SignUp };
