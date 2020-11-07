import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IFiubaLoginVariables } from "$hooks";

import { LoginForm } from "$components/LoginForm";
import { OnSubmit } from "$components/LoginForm/interface";
import { LoginWindow } from "$components/LoginWindow";
import { DniField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";

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
    <LoginForm<IFiubaLoginVariables>
      {...props}
      title={translations.title}
      initialValues={{ dni: "", password: "" }}
      className={styles.form}
      usernameField={<DniField mandatory={false} name="dni" label={translations.dni} />}
      signUpLink={<Link to={RoutesBuilder.applicant.signUp()}>{translations.signup}</Link>}
      recoverPasswordLink={
        <a target="_blank" rel="noopener noreferrer" href={"http://cambio.fi.uba.ar/"}>
          {translations.recoverPassword}
        </a>
      }
      switchLoginFormLink={
        <Link to={RoutesBuilder.company.login()}>{translations.goToCompany}</Link>
      }
      seededUsersText={seededUsersText}
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<IFiubaLoginVariables>;
  translations: ITranslations;
}
