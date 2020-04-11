import React, { FunctionComponent } from "react";
import { IOffer } from "$interfaces/Offer";

import { CompanyLogo } from "$components/CompanyLogo";
import { Subtitle } from "$components/Subtitle";
import { Headline } from "$components/Headline";
import { Description } from "$components/Description";
import { SectionDetail } from "$components/SectionDetail";
import Button from "$components/Button";
import { OfferInfo } from "../OfferInfo";
import HumanizeDuration from "humanize-duration";

import styles from "./styles.module.scss";

const DetailCard: FunctionComponent<IDetailProps> = ({ offer, goToCompany }) => (
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`#${goToCompany}`}
          >
            {offer.company.companyName}
          </a>
        </Subtitle>
        <div className={styles.createdAt}>
          {
            `Hace
            ${
              HumanizeDuration(
                new Date(parseInt(offer.createdAt, 10)).getTime() - new Date(Date.now()).getTime(),
                { language: "es", largest: 2 }
              )
            }
            `
          }
        </div>
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
          Postularme
        </Button>
      </div>
    </div>
  </div>
);

interface IDetailProps {
  offer: IOffer;
  goToCompany: string;
}

export { DetailCard };
