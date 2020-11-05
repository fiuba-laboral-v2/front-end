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

const seededUsersText = `
Email                    | Nombre   | Rol
------------------------------------------------------------
claudio@devartis.com     | Claudio  | Admin de devartis
marcos@mercadolibre.com  | Marcos   | Admin de Mercado Libre

Contraseña de ambos: SecurePassword1010
`;

export const Login: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    <LoginForm<ICompanyLoginVariables>
      {...props}
      title={translations.title}
      initialValues={{ email: "", password: "" }}
      className={styles.form}
      usernameField={<EmailField name="email" label={translations.email} autoComplete="email" />}
      signUpLink={<Link to={RoutesBuilder.company.signUp()}>{translations.signup}</Link>}
      recoverPasswordLink={
        <Link to={RoutesBuilder.company.login()}>{translations.recoverPassword}</Link>
      }
      switchLoginFormLink={
        <Link to={RoutesBuilder.applicant.login()}>{translations.goToApplicant}</Link>
      }
      seededUsersText={seededUsersText}
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<ICompanyLoginVariables>;
  translations: ITranslations;
}
