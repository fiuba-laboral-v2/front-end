import React, { FunctionComponent } from "react";

import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { EnterButton } from "./EnterButton";
import { LoginWindow } from "$components/LoginWindow";
import { Headline } from "$components/Headline";

import { IRegisterProps } from "./interface";
import styles from "./styles.module.scss";

export const InitialLogin: FunctionComponent<IRegisterProps> = (
  {
    loginAsFiubaUser,
    loginAsCompanyUser,
    translations
  }
) => (
  <LoginWindow>
    <section className={styles.rightContainer}>
      <Headline className={styles.title}>{translations.title}</Headline>
      <EnterButton
        className={styles.applicantCard}
        Icon={SchoolIcon}
        onClick={loginAsFiubaUser}
        label={translations.fiubaLogin}
      />
      <EnterButton
        className={styles.companyCard}
        Icon={BusinessIcon}
        onClick={loginAsCompanyUser}
        label={translations.companyLogin}
      />
    </section>
  </LoginWindow>
);
