import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

import { Headline } from "$components/Headline";
import { Subtitle } from "$components/Subtitle";
import { Description } from "$components/Description";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { StatusLabel } from "$components/StatusLabel";
import { ClickableCard } from "$components/ClickableCard";
import { CompanyLogo } from "$components/CompanyLogo";
import { ICompany } from "$interfaces/Company";

export const CompanyDetail: FunctionComponent<ICompanyDetailProps> = (
  {
    editButton,
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
) => {
  return (
    <ClickableCard className={styles.card}>
      <div className={styles.header}>
        <CompanyLogo
          size="extraLarge"
          companyName={companyName}
          logo={logo}
        />
        <div className={styles.mainInfo}>
          <Headline>{companyName}</Headline>
          <Subtitle className={styles.companySlogan}>{slogan}</Subtitle>
          <DetailContactMe email={email} website={website}/>
        </div>
        <div className={styles.editButton}>{editButton}</div>
        <StatusLabel status={approvalStatus} useTooltip={false} />
      </div>
      <Description>{description}</Description>
      <section className={styles.photos}>
        {
          photos.map((source, index) =>
            (<img key={index} src={source} alt={`${companyName}`}/>)
          )}
      </section>
    </ClickableCard>
  );
};

interface ICompanyDetailProps {
  company: ICompany;
  editButton?: React.ReactElement;
  className?: string;
}
