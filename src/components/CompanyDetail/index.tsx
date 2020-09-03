import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

import { Subtitle } from "$components/Subtitle";
import { Description } from "$components/Description";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { Card } from "$components/Card";
import { StatusTitle } from "$components/StatusTitle";
import { CompanyLogo } from "$components/CompanyLogo";
import { ICompany } from "$interfaces/Company";

export const CompanyDetail: FunctionComponent<ICompanyDetailProps> = (
  {
    className,
    editButton,
    withStatusLabel,
    company: {
      companyName,
      approvalStatus,
      email = "",
      slogan = "",
      logo = "",
      website = "",
      description = "",
      photos = []
    }
  }
) => (
  <Card largePadding className={className}>
    <div className={styles.header}>
      <CompanyLogo
        size="extraLarge"
        companyName={companyName}
        logo={logo}
      />
      <div className={styles.mainInfo}>
        <StatusTitle
          detailTitle={companyName}
          approvalStatus={withStatusLabel ? approvalStatus : undefined}
        />
        <Subtitle className={styles.companySlogan}>{slogan}</Subtitle>
        <DetailContactMe email={email} website={website}/>
      </div>
      <div className={styles.editButton}>{editButton}</div>
    </div>
    <Description>{description}</Description>
    <section className={styles.photos}>
      {
        photos.map((source, index) =>
          (<img key={index} src={source} alt={`${companyName}`}/>)
        )}
    </section>
  </Card>
);

interface ICompanyDetailProps {
  company: ICompany;
  editButton?: React.ReactElement;
  withStatusLabel?: boolean;
  className?: string;
}
