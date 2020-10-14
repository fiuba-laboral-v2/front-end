import React, { FunctionComponent } from "react";
import { IApplicantsProps } from "./interface";
import { Card } from "$components/Card";
import styles from "./styles.module.scss";
import { ListTitle } from "$components/ListTitle";
import { Subtitle } from "$components/Subtitle";
import { LoadingSpinner } from "$components/LoadingSpinner";

const Applicants: FunctionComponent<IApplicantsProps> = ({ applicants, loading }) => {
  if (loading) {
    return (
      <>
        <ListTitle titleTranslationPath={"applicantList"} />
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <ListTitle titleTranslationPath={"applicantList"} />
      {applicants.map(applicant => (
        <div className={styles.row} key={applicant.uuid}>
          <Card>
            <div className={styles.childrenContainer}>
              <Subtitle className={styles.name}>
                {`${applicant.user.name} ${applicant.user.surname}`}
              </Subtitle>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export { Applicants };
