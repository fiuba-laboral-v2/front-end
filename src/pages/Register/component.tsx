import React, { FunctionComponent } from "react";
import classNames from "classnames";

import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { NavBar } from "$components/NavBar";
import { ListItem } from "$components/ListItem";
import { Subtitle } from "$components/Subtitle";

import styles from "./styles.module.scss";

const Register: FunctionComponent<IRegisterProps> = (
  {
    onClickRegisterApplicant,
    onClickRegisterCompany
  }
) => (
  <>
    <NavBar/>
    <section className={styles.container}>
      <section className={styles.header}>
        <img className={styles.logo} src={"images/logo.png"} alt="Register logo"/>
      </section>
      <section className={styles.body}>
        <ListItem
          key="applicant"
          className={classNames(styles.card, styles.applicantCard)}
          onClick={onClickRegisterApplicant}
        >
          <SchoolIcon color="primary" className={styles.cardLogo} fontSize="large"/>
          <Subtitle className={styles.cardText}> Registrarme como alumno </Subtitle>
        </ListItem>
        <ListItem
          key="company"
          className={classNames(styles.card, styles.companyCard)}
          onClick={onClickRegisterCompany}
        >
          <BusinessIcon color="primary" className={styles.cardLogo} fontSize="large"/>
          <Subtitle className={styles.cardText}> Registrarme como empresa </Subtitle>
        </ListItem>
      </section>
    </section>
  </>
);

interface IRegisterProps {
  onClickRegisterApplicant: () => void;
  onClickRegisterCompany: () => void;
}

export { Register };
