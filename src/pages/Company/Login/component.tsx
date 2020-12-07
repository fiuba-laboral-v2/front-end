import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { ICompanyLoginVariables } from "$hooks";

import { LoginForm } from "$components/LoginForm";
import { OnSubmit } from "$components/LoginForm/interfaces";
import { LoginWindow } from "$components/LoginWindow";
import { EmailField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "$components/LoadingSpinner";

const seededUsersText = `
Email                         | Nombre   | Rol
-----------------------------------------------------------------
fiubalaboralv2@gmail.com      | Claudio  | Admin de devartis
sebastian.e.blanco@gmail.com  | Marcos   | Admin de Mercado Libre

Contraseña de ambos: SecurePassword1010
`;

export const Login: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    {!translations && <LoadingSpinner />}
    <LoginForm<ICompanyLoginVariables>
      {...props}
      hidden={!translations}
      title={translations?.title}
      initialValues={{ email: "", password: "" }}
      className={styles.form}
      usernameField={
        translations && (
          <EmailField
            autoFocus
            singleLine
            name="email"
            label={translations.email}
            autoComplete="email"
          />
        )
      }
      signUpLink={
        translations && <Link to={RoutesBuilder.company.signUp()}>{translations.signup}</Link>
      }
      recoverPasswordLink={
        translations && (
          <Link to={RoutesBuilder.company.login()}>{translations.recoverPassword}</Link>
        )
      }
      switchLoginFormLink={
        translations && (
          <Link to={RoutesBuilder.applicant.login()}>{translations.goToApplicant}</Link>
        )
      }
      seededUsersText={seededUsersText}
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<ICompanyLoginVariables>;
  translations?: ITranslations;
}
