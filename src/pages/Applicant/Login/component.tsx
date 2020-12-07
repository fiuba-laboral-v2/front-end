import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IFiubaLoginVariables } from "$hooks";

import { LoginForm } from "$components/LoginForm";
import { OnSubmit } from "$components/LoginForm/interfaces";
import { LoginWindow } from "$components/LoginWindow";
import { DniField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "$components/LoadingSpinner";

const seededUsersText = `
DNI  | Nombre      | Rol 
--------------------------------------
111  | Dylan       | Alumno
222  | Manuel      | Graduado
333  | Sebastián   | Alumno y graduado 
888  | Federico    | Admin extensión
999  | Aldana      | Admin graduados

Cualquier contraseña es válida
`;

export const Login: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    {!translations && <LoadingSpinner />}
    <LoginForm<IFiubaLoginVariables>
      {...props}
      hidden={!translations}
      title={translations?.title}
      initialValues={{ dni: "", password: "" }}
      className={styles.form}
      usernameField={
        translations && (
          <DniField autoFocus singleLine mandatory={false} name="dni" label={translations.dni} />
        )
      }
      signUpLink={
        translations && <Link to={RoutesBuilder.applicant.signUp()}>{translations.signup}</Link>
      }
      recoverPasswordLink={
        translations && (
          <a target="_blank" rel="noopener noreferrer" href={"http://cambio.fi.uba.ar/"}>
            {translations.recoverPassword}
          </a>
        )
      }
      switchLoginFormLink={
        translations && <Link to={RoutesBuilder.company.login()}>{translations.goToCompany}</Link>
      }
      seededUsersText={seededUsersText}
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<IFiubaLoginVariables>;
  translations?: ITranslations;
}
