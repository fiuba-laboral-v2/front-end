import React, { FunctionComponent } from "react";
import { ICompaniesProps } from "./interface";
import styles from "./styles.module.scss";
import { ListItem } from "$components/ListItem";
import Button from "$components/Button";

const Companies: FunctionComponent<ICompaniesProps> = (
  {
    companies,
    onClickView,
    viewButtonText
  }) => (
  <>
    {
      companies.map(company =>
        <div className={styles.row} key={company.id}>
          <ListItem>
            <div className={styles.childrenContainer}>
              <p className={styles.name}>{company.companyName}</p>
              <div className={styles.buttons}>
                <Button
                  onClick={() => onClickView(company.id)}
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

export { Companies };
