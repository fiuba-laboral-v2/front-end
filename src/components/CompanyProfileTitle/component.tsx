import React, { FunctionComponent } from "react";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface ICompanyProfileTitleProps {
  myCompanyProfile: string;
  explanation: string;
  edit: string;
}

const CompanyProfileTitle: FunctionComponent<ICompanyProfileTitleProps> = (
  {
    myCompanyProfile,
    explanation,
    edit
  }
) => (
  <div className={styles.profileTitle}>
    <h1 className={styles.header}>{myCompanyProfile}</h1>
    <div className={styles.editPrompt}>
      <span>{explanation}</span>
      <div className={styles.editButton}>
        <Link to="/my-company/">
          <CreateIcon fontSize={"inherit"}/>
          {edit}
        </Link>
      </div>
    </div>
  </div>
);

export default CompanyProfileTitle;
