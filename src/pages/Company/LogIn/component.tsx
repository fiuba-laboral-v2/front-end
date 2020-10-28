import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { ICompanyLoginVariables } from "$hooks";

import { LoginForm } from "$components/LoginForm";
import { OnSubmit } from "$components/LoginForm/interface";
import { LoginWindow } from "$components/LoginWindow";
import { EmailField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";

export const LogIn: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    <LoginForm<ICompanyLoginVariables>
      {...props}
      initialValues={{ email: "", password: "" }}
      className={styles.form}
      fields={<EmailField name="email" label={translations.email} autoComplete="email" />}
      footer={
        <div className={styles.register}>
          <span className={styles.dontHaveAnAccount}>{translations.dontHaveAnAccount}</span>
          <Link to={RoutesBuilder.company.signUp()}>{translations.register}</Link>
        </div>
      }
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<ICompanyLoginVariables>;
  translations: ITranslations;
}
