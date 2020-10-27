import React, { FunctionComponent } from "react";

import { LogInForm } from "$components/LogInForm";
import { OnSubmit } from "$components/LogInForm/interface";
import { LoginWindow } from "$components/LoginWindow";
import { EmailField } from "$components/Fields";

import styles from "./styles.module.scss";

export const LogIn: FunctionComponent<IComponentProps> = props => (
  <LoginWindow>
    <LogInForm
      {...props}
      className={styles.form}
      fields={
        <EmailField
          className={styles.textInput}
          name="email"
          label={"EMAIL TRANSLATION"}
          autoComplete="email"
        />
      }
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit;
}
