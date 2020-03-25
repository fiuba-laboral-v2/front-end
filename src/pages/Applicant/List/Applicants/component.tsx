import React, { FunctionComponent } from "react";
import { IApplicantsProps } from "./interface";
import { ListItem } from "$components/ListItem";
import styles from "./styles.module.scss";
import Button from "$components/Button";

const Applicants: FunctionComponent<IApplicantsProps> = (
  {
    applicants,
    onClickEdit,
    onClickView,
    editButtonText,
    viewButtonText
  }) => (
    <>
      {
        applicants.map(applicant =>
          <div className={styles.row} key={applicant.uuid}>
            <ListItem>
              <div className={styles.childrenContainer}>
                <p className={styles.name}>{`${applicant.name} ${applicant.surname}`}</p>
                <div className={styles.buttons}>
                  <Button
                    onClick={() => onClickEdit(applicant.uuid)}
                    className="secondary"
                  >
                    {editButtonText}
                  </Button>
                  <Button
                    onClick={() => onClickView(applicant.uuid)}
                    className="primary"
                  >
                    {viewButtonText}
                  </Button>
                </div>
              </div>
            </ListItem>
          </div>
        )
      }
    </>
  );


export { Applicants };
