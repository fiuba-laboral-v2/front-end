import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IFiubaLoginVariables } from "$hooks";

import { LogInForm } from "$components/LogInForm";
import { OnSubmit } from "$components/LogInForm/interface";
import { LoginWindow } from "$components/LoginWindow";
import { DniField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";

export const LogIn: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    <LogInForm<IFiubaLoginVariables>
      {...props}
      initialValues={{ dni: "", password: "" }}
      className={styles.form}
      fields={<DniField name="dni" label={translations.dni} />}
      footer={
        <div className={styles.footer}>
          <Link to={RoutesBuilder.applicant.signUp()}>{translations.register}</Link>
          <div>
            <span className={styles.forgotYourPassword}>{translations.forgotYourPassword}</span>
            <Link to={RoutesBuilder.company.signUp()}>{translations.manageYourFiubaAccount}</Link>
          </div>
        </div>
      }
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<IFiubaLoginVariables>;
  translations: ITranslations;
}
