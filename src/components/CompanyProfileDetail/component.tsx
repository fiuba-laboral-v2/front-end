import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

interface ICompanyProfileDetailProps {
  name: string;
  email: string;
  slogan: string;
  logoImageSource: string;
  website: string;
}

const CompanyProfileDetail: FunctionComponent<ICompanyProfileDetailProps> = (
  {
    name,
    email,
    slogan,
    logoImageSource,
    website
  }
) => (
  <div className={styles.mainContainer}>
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logoImageSource} alt={`${name} logo`}/>
        </div>
        <div className={styles.mainInfo}>
          <h2 className={styles.companyName}>{name}</h2>
          <h3 className={styles.companySlogan}>{slogan}</h3>
          <div className={styles.contactInfo}>
            <a href={`mailto: ${email}`}>{email}</a>
            <span className={styles.contactInfoDivider}> — </span>
            <a href={website}>{website}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyProfileDetail;
