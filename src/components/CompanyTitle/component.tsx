import React, { FunctionComponent } from "react";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ICompanyTitleProps } from "./interface";

const CompanyTitle: FunctionComponent<ICompanyTitleProps> = (
  {
    myCompany,
    explanation,
    edit
  }
) => (
  <div className={styles.profileTitle}>
    <h1 className={styles.header}>{myCompany}</h1>
    <div className={styles.editPrompt}>
      <span>{explanation}</span>
      <div className={styles.editButton}>
        <Link to="/companies/">
          <CreateIcon fontSize={"inherit"}/>
          {edit}
        </Link>
      </div>
    </div>
  </div>
);

export default CompanyTitle;
