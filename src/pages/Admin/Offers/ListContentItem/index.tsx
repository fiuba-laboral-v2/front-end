import React, { FunctionComponent } from "react";
import moment from "moment";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { CareerList } from "$components/CareerList";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { ApplicantType } from "$interfaces/Applicant";

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

const isForGraduados = (targetApplicantType: ApplicantType) =>
  targetApplicantType === ApplicantType.both || targetApplicantType === ApplicantType.graduate;

const isForExtension = (targetApplicantType: ApplicantType) =>
  targetApplicantType === ApplicantType.both || targetApplicantType === ApplicantType.student;

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
    <p className={styles.text}>
      {title}
    </p>
    <p className={styles.text}>
      {targetApplicantType}
    </p>
    <p className={styles.text}>
      {hoursPerDay}
    </p>
    <p className={styles.text}>
      {`${minimumSalary} - ${maximumSalary}`}
    </p>
    <div className={styles.careersContainer}>
    { careers ?
      <CareerList
        className={styles.careers}
        careers={careers}
      /> : <p></p>
    }
    </div>
    {
      isForGraduados(targetApplicantType) ?
        <div className={styles.statusContainer}>
          <SharedStatusLabel
            status={graduadosApprovalStatus}
            withTooltip
            type="large"
          />
        </div> : <p></p>
    }
    {
      isForExtension(targetApplicantType) ?
        <div className={styles.statusContainer}>
          <SharedStatusLabel
            status={extensionApprovalStatus}
            withTooltip
            type="large"
          />
        </div> : <p></p>
    }
    <div className={styles.text}>
      {moment(updatedAt).format(DATE_FORMAT)}
    </div>
  </>
);

interface IListContentItemProps {
  offer: IOffer;
}
