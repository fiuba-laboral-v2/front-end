import React, { FunctionComponent } from "react";
import moment from "moment";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { CareerList } from "$components/CareerList";
import { SeparatedStatusLabel } from "$components/SeparatedStatusLabel";
import { TargetApplicantType } from "$components/TargetApplicantType";
import { DATE_FORMAT } from "../../components/ListPageContainer/constants";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  offer: {
    title,
    hoursPerDay,
    targetApplicantType,
    minimumSalary,
    maximumSalary,
    updatedAt,
    graduadosApprovalStatus,
    extensionApprovalStatus,
    company: {
      companyName
    },
    careers
  }
}) => (
  <>
    <p className={styles.text}>
      {companyName}
    </p>
    <div className={styles.container}>
      <p className={styles.text}>
        {title}
      </p>
    </div>
    <p className={styles.text}>
      {hoursPerDay}
    </p>
    <div className={styles.salary}>
      <p className={styles.text}>
        {`Max: ${maximumSalary}`}
      </p>
      <p className={styles.text}>
        {`Min: ${minimumSalary}`}
      </p>
    </div>
    <div className={styles.careersContainer}>
    { careers ?
      <CareerList
        className={styles.careers}
        careers={careers}
        shorten={true}
      /> : <p></p>
    }
    </div>
    <TargetApplicantType targetApplicantType={targetApplicantType} className={styles.text} />
    <div className={styles.container}>
      <SeparatedStatusLabel
        styles={styles}
        type="no-background"
        withStatusText={false}
        targetApplicantType={targetApplicantType}
        graduadosApprovalStatus={graduadosApprovalStatus}
        extensionApprovalStatus={extensionApprovalStatus}
      />
    </div>
    <div className={styles.text}>
      {moment(updatedAt).format(DATE_FORMAT)}
    </div>
  </>
);

interface IListContentItemProps {
  offer: IOffer;
}
