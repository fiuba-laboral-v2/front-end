import React, { FunctionComponent } from "react";
import { IOffer } from "$interfaces/Offer";
import { TimeFormatter } from "$models/TimeFormatter";
import { isNil } from "lodash";
import { NumberFormatter } from "$models/NumberFormatter";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { InternshipLabel } from "$components/InternshipLabel";
import { OpenDetailIcon } from "$components/OpenDetailIcon";
import { CareerList } from "$components/CareerList";
import { SeparatedStatusLabel } from "$components/SeparatedStatusLabel";

import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({ offer }) => (
  <>
    <p className={styles.text}>{offer.company.companyName}</p>
    <div className={styles.container}>
      <div className={styles.text}>
        {offer.title}
        {offer.isInternship && <InternshipLabel className={styles.internshipLabel} />}
      </div>
    </div>
    <div className={styles.careersContainer}>
      {offer.careers ? (
        <CareerList className={styles.careers} careers={offer.careers} shorten={true} />
      ) : (
        <p />
      )}
    </div>
    <p className={styles.text}>{offer.hoursPerDay}</p>
    <div className={styles.salary}>
      {isNil(offer.maximumSalary) ? (
        <span>{NumberFormatter.formatMoney(offer.minimumSalary)}</span>
      ) : (
        [
          ["Min: ", offer.minimumSalary],
          ["Max: ", offer.maximumSalary]
        ].map(([label, salary]) => (
          <p key={label}>
            <i>{label}</i>
            <span>{NumberFormatter.formatMoney(salary)}</span>
          </p>
        ))
      )}
    </div>
    <div className={styles.container}>
      <SeparatedStatusLabel
        styles={styles}
        type="no-background"
        withStatusText={false}
        offer={offer}
      />
    </div>
    <div className={styles.text}>{TimeFormatter.dateTime(offer.updatedAt)}</div>
    <div className={styles.container}>
      <OpenDetailIcon detailRoute={RoutesBuilder.admin.offerDetail(offer.uuid)} />
    </div>
  </>
);

interface IListContentItemProps {
  offer: IOffer;
}
