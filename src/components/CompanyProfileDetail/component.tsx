import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICompanyProfileDetailProps } from "./CompanyProfileInterface";

const CompanyProfileDetail: FunctionComponent<ICompanyProfileDetailProps> = (
  {
    name,
    email,
    slogan,
    logoImageSource,
    website,
    description,
    photoImageSources
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
      <p className={styles.description}>{description}</p>
      <section className={styles.photos}>
        {photoImageSources.map(source => (<img src={source} alt={`${name}`}/>))}
      </section>
    </div>
  </div>
);

export default CompanyProfileDetail;
