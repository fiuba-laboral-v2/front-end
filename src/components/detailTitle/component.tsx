import React, { FunctionComponent } from "react";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { IDetailTitleProps } from "./interface";

const DetailTitle: FunctionComponent<IDetailTitleProps> = (
  {
    myDetail,
    explanation,
    edit,
    link
  }
) => (
  <div className={styles.profileTitle}>
    <h1 className={styles.header}>{myDetail}</h1>
    <div className={styles.editPrompt}>
      <span>{explanation}</span>
      <div className={styles.editButton}>
        <Link to={link}>
          <CreateIcon fontSize={"inherit"}/>
          {edit}
        </Link>
      </div>
    </div>
  </div>
);

export { DetailTitle };
