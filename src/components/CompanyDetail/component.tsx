import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICompanyDetailProps } from "./interface";
import { DetailHeadline } from "$components/DetailHeadline";

const CompanyDetail: FunctionComponent<ICompanyDetailProps> = (
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
    <div className={styles.detailContainer}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logoImageSource} alt={`${name} logo`}/>
        </div>
        <div className={styles.mainInfo}>
          <DetailHeadline headline={name}/>
          <h3 className={styles.detailByline}>{slogan}</h3>
          <div className={styles.contactInfo}>
            <a href={`mailto: ${email}`}>{email}</a>
            <span className={styles.contactInfoDivider}> — </span>
            <a target="_blank" rel="noopener noreferrer" href={website}>{website}</a>
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

export default CompanyDetail;
