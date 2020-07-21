import React, { FunctionComponent } from "react";

import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { NavBar } from "$components/NavBar";
import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";

import { IRegisterProps } from "./interface";
import styles from "./styles.module.scss";

const Register: FunctionComponent<IRegisterProps> = (
  {
    onClickRegisterApplicant,
    onClickRegisterCompany,
    translations
  }
) => (
  <section className={styles.register}>
    <NavBar/>
    <section className={styles.container}>
      <section className={styles.header}>
        <img className={styles.logo} src={"images/logo.png"} alt="Register logo"/>
      </section>
      <section className={styles.body}>
        <Card className={styles.applicantCard} onClick={onClickRegisterApplicant}>
          <SchoolIcon className={styles.cardLogo} fontSize="large"/>
          <Subtitle className={styles.cardText}>{translations.registerAsApplicant}</Subtitle>
        </Card>
        <Card className={styles.companyCard} onClick={onClickRegisterCompany}>
          <BusinessIcon className={styles.cardLogo} fontSize="large"/>
          <Subtitle className={styles.cardText}>{translations.registerAsCompany}</Subtitle>
        </Card>
      </section>
    </section>
  </section>
);

export { Register };
