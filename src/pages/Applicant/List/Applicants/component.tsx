import React, { FunctionComponent } from "react";
import { IApplicantsProps } from "./interface";
import { ListItem } from "$components/ListItem";
import { SubmitButton } from "$components/SubmitButton";
import styles from "./styles.module.scss";

const Applicants: FunctionComponent<IApplicantsProps> = (
  {
    applicants,
    onClickEdit,
    onClickView,
    editButtonText,
    viewButtonText
  }) => (
  <div>
    {
      applicants.map(applicant =>
        <div className={styles.row} key={applicant.padron}>
          <ListItem>
            <div className={styles.childrenContainer}>
              <p className={styles.name}>{`${applicant.name} ${applicant.surname}`}</p>
              <div className={styles.separator}/>
              <div className={styles.buttons}>
                <div className={styles.separator}/>
                <SubmitButton
                  onClick={() => onClickEdit(applicant.padron)}
                  text={editButtonText}
                />
                <SubmitButton
                  onClick={() => onClickView(applicant.padron)}
                  text={viewButtonText}
                />
              </div>
            </div>
          </ListItem>
        </div>
      )
    }
  </div>
);


export { Applicants };
