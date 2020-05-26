import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "$components/Link";
import { CompanyLogo } from "$components/CompanyLogo";
import { Subtitle } from "$components/Subtitle";
import { Headline } from "$components/Headline";
import { SectionDetail } from "$components/SectionDetail";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { OfferInfo } from "../OfferInfo";
import styles from "./styles.module.scss";
import { sortBy } from "lodash";
import { IOffer } from "$interfaces/Offer";
import { IMyOffer } from "$interfaces/Applicant";

export const OfferDetail: FunctionComponent<IOfferDetailProps> = (
  {
    applyButton,
    editButton,
    offer,
    goToCompany
  }
) => (
  <div className={styles.mainContainer}>
    <div className={styles.header}>
      <CompanyLogo
        className={styles.companyLogo}
        size="extraLarge"
        companyName={offer.company.companyName}
        logo={offer.company.logo}
      />
      <div className={styles.rightHeader}>
        <div className={styles.titleContainer}>
          <Headline className={styles.title}>{offer.title}</Headline>
          {editButton}
        </div>
        <Subtitle className={styles.companyName} >
          <Link to={goToCompany}>{offer.company.companyName}</Link>
        </Subtitle>
        <TimeHumanizer className={styles.createdAt} since={offer.createdAt}/>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.leftBodyContainer}>
        <p className={styles.description}>{offer.description}</p>
        {
          sortBy(offer.sections, ["displayOrder"])?.map(({ displayOrder, title, text }) =>
            <SectionDetail key={displayOrder} title={title} text={text}/>
          )
        }
      </div>
      <div className={styles.rightBodyContainer}>
        <OfferInfo className={styles.offerInfo} offer={offer}/>
        {applyButton}
      </div>
    </div>
  </div>
);

interface IOfferDetailProps {
  applyButton?: ReactElement;
  editButton?: ReactElement;
  offer: IMyOffer | IOffer;
  goToCompany: string;
}
