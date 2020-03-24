import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICompanyDetailProps } from "./interface";
import { DetailHeadline } from "$components/Detail/DetailHeadline";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescription } from "$components/Detail/DetailDescription";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { CompanyLogo } from "$components/CompanyLogo";

const Detail: FunctionComponent<ICompanyDetailProps> = (
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
  <DetailMainContainer>
    <div className={styles.header}>
      <CompanyLogo
        size={"detailSize"}
        companyName={name}
        logo={logoImageSource}
      />
      <div className={styles.mainInfo}>
        <DetailHeadline headline={name}/>
        <DetailByLine byLine={slogan}/>
        <DetailContactMe email={email} website={website}/>
      </div>
    </div>
    <DetailDescription description={description}/>
    <section className={styles.photos}>
      {
        photoImageSources.map((source, index) =>
          (<img key={index} src={source} alt={`${name}`}/>)
        )}
    </section>
  </DetailMainContainer>
);

export { Detail };
