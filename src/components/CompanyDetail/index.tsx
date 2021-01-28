import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

import { Subtitle } from "$components/Subtitle";
import { Description } from "$components/Description";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { Card } from "$components/Card";
import { StatusTitle } from "$components/StatusTitle";
import { CompanyLogo } from "$components/CompanyLogo";
import { ICompany } from "$interfaces/Company";
import { CompanyPhoto } from "./CompanyPhoto";

export const CompanyDetail: FunctionComponent<ICompanyDetailProps> = ({
  className,
  withStatusLabel,
  withInvalidPhotos,
  company,
  children,
  link
}) => (
  <Card largePadding className={className} hidden={!company}>
    <div className={styles.header}>
      <CompanyLogo
        size="extraLarge"
        companyName={company?.companyName}
        logo={company?.logo}
        useDefaultIcon
      />
      <div className={styles.mainInfo}>
        <StatusTitle
          link={link}
          detailTitle={company?.companyName}
          approvalStatus={withStatusLabel ? company?.approvalStatus : undefined}
        />
        <p className={styles.businessName}>{company?.businessName}</p>
        <Subtitle className={styles.companySlogan}>{company?.slogan}</Subtitle>
        <DetailContactMe email={company?.email} website={company?.website} />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
    <Description>{company?.description}</Description>
    <section className={styles.photos}>
      {company?.photos?.map((source, index) => (
        <CompanyPhoto
          key={index}
          url={source}
          companyName={company.companyName}
          hideWhenInvalid={!withInvalidPhotos}
        />
      ))}
    </section>
  </Card>
);

interface ICompanyDetailProps {
  company?: ICompany;
  withStatusLabel?: boolean;
  withInvalidPhotos?: boolean;
  className?: string;
  link?: string;
}
