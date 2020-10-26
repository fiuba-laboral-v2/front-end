import React, { FunctionComponent } from "react";

import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { EnterButton } from "./EnterButton";
import { LoginWindow } from "$components/LoginWindow";

import { IRegisterProps } from "./interface";
import styles from "./styles.module.scss";

export const InitialLogin: FunctionComponent<IRegisterProps> = (
  {
    onClickRegisterApplicant,
    onClickRegisterCompany,
    translations
  }
) => (
  <LoginWindow title={translations.title}>
    <EnterButton
      className={styles.applicantCard}
      Icon={SchoolIcon}
      onClick={onClickRegisterApplicant}
      label={translations.fiubaLogin}
    />
    <EnterButton
      className={styles.companyCard}
      Icon={BusinessIcon}
      onClick={onClickRegisterCompany}
      label={translations.companyLogin}
    />
  </LoginWindow>
);
