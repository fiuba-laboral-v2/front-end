import React, { FunctionComponent } from "react";

import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { EnterButton } from "./EnterButton";
import { LoginWindow } from "$components/LoginWindow";
import { Title } from "$components/Title";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const Login: FunctionComponent<IComponentProps> = (
  {
    loginAsFiubaUserLink,
    loginAsCompanyUserLink,
    translations
  }
) => (
  <LoginWindow rightContainerClassName={styles.rightWindowContainer}>
    <section className={styles.rightContainer}>
      {
        !translations ? <LoadingSpinner/> :
          <>
            <Title className={styles.title}>{translations.title}</Title>
            <EnterButton
              className={styles.applicantCard}
              Icon={SchoolIcon}
              link={loginAsFiubaUserLink}
              label={translations.fiubaLogin}
            />
            <EnterButton
              className={styles.companyCard}
              Icon={BusinessIcon}
              link={loginAsCompanyUserLink}
              label={translations.companyLogin}
            />
          </>
      }
    </section>
  </LoginWindow>
);
