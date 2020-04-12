import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { IOffer } from "$interfaces/Offer";

import { CompanyLogo } from "$components/CompanyLogo";
import { Subtitle } from "$components/Subtitle";
import { Headline } from "$components/Headline";
import { Description } from "$components/Description";
import { SectionDetail } from "$components/SectionDetail";
import { TimeHumanizer } from "$components/TimeHumanizer";
import Button from "$components/Button";
import { OfferInfo } from "../OfferInfo";

import styles from "./styles.module.scss";

const Detail: FunctionComponent<IDetailProps> = (
  {
    offer,
    goToCompany,
    translations
  }
) => (
  <div className={styles.mainContainer}>
    <div className={styles.header}>
      <CompanyLogo
        className={styles.companyLogo}
        size="large"
        companyName={offer.company.companyName}
        logo={offer.company.logo}
      />
      <div className={styles.rightHeader}>
        <Headline className={styles.title} headline={offer.title}/>
        <Subtitle className={styles.companyName} >
          <Link to={goToCompany}>{offer.company.companyName}</Link>
        </Subtitle>
        <TimeHumanizer className={styles.createdAt} since={parseInt(offer.createdAt, 10)}/>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.leftBodyContainer}>
        <Description description={offer.description}/>
        {
          offer.sections?.map(({ displayOrder, title, text })  =>
            <SectionDetail key={displayOrder} title={title} text={text}/>
          )
        }
      </div>
      <div className={styles.rightBodyContainer}>
        <OfferInfo className={styles.offerInfo} offer={offer}/>
        <Button
          className="primary"
          width="expand"
          type="submit"
        >
          {translations.apply}
        </Button>
      </div>
    </div>
  </div>
);

interface IDetailTranslations {
  apply: string;
}

interface IDetailProps {
  offer: IOffer;
  goToCompany: string;
  translations: IDetailTranslations;
}

export { Detail };
