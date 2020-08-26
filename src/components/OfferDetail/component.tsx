import React, { FunctionComponent, ReactElement } from "react";
import classNames from "classnames";
import { Link } from "$components/Link";
import { CompanyLogo } from "$components/CompanyLogo";
import { Subtitle } from "$components/Subtitle";
import { Headline } from "$components/Headline";
import { SectionDetail } from "$components/SectionDetail";
import { CreatedSince } from "$components/CreatedSince";
import { OfferInfo } from "../OfferInfo";
import { sortBy } from "lodash";
import { IOffer } from "$interfaces/Offer";
import { IMyOffer } from "$interfaces/Applicant";
import styles from "./styles.module.scss";

export const OfferDetail: FunctionComponent<IOfferDetailProps> = (
  {
    mobileLayout,
    className,
    applyButton,
    editButton,
    offer,
    goToCompany
  }
) => (
  <div className={classNames(styles.mainContainer, className, { [styles.mobile]: mobileLayout })}>
    <div className={styles.header}>
      <CompanyLogo
        mobileLayout={mobileLayout}
        className={styles.companyLogo}
        size="extraLarge"
        companyName={offer.company.companyName}
        logo={offer.company.logo}
      />
      <div className={styles.rightHeader}>
        <div className={styles.titleContainer}>
          <Headline className={styles.title} mobileLayout={mobileLayout}>{offer.title}</Headline>
          <div>{editButton}</div>
        </div>
        <Subtitle className={styles.companyName} >
          {goToCompany && <Link to={goToCompany}>{offer.company.companyName}</Link>}
          {!goToCompany && <p>{offer.company.companyName}</p>}
        </Subtitle>
        <CreatedSince className={styles.createdAt} date={offer.createdAt} />
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
  mobileLayout?: boolean;
  className?: string;
  applyButton?: ReactElement;
  editButton?: ReactElement;
  offer: IMyOffer | IOffer;
  goToCompany?: string;
}
