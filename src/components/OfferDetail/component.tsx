import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
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
        <Headline className={styles.title}>{offer.title}</Headline>
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
  applyButton?: React.ReactElement;
  offer: IMyOffer | IOffer;
  goToCompany: string;
}
