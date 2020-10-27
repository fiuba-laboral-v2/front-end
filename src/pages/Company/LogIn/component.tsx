import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";

import { LogInForm } from "$components/LogInForm";
import { OnSubmit } from "$components/LogInForm/interface";
import { LoginWindow } from "$components/LoginWindow";
import { EmailField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";

export const LogIn: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    <LogInForm
      {...props}
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
  onSubmit: OnSubmit;
  translations: ITranslations;
}
