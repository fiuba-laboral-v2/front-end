import React, { FunctionComponent } from "react";
import BusinessIcon from "@material-ui/icons/Business";

import styles from "./styles.module.scss";

const Menu: FunctionComponent = () => (
  <div className={styles.menuContent}>
    <div className={styles.company}>
      <BusinessIcon className={styles.companyLogo} fontSize="default"/>
      <p className={styles.companyDescription}>Registro de empresa pendiente</p>
    </div>
  </div>
);

export { Menu };
