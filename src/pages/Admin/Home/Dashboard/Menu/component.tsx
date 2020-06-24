import React, { FunctionComponent } from "react";
import BusinessIcon from "@material-ui/icons/Business";

import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";

const companyIconTitle = "Registro de empresa pendiente";

const Menu: FunctionComponent = () => (
  <div className={styles.menuContent}>
    <div className={styles.company}>
      <Tooltip classes={{ tooltip: styles.tooltip }}
               title={companyIconTitle}
               placement="right">
        <BusinessIcon className={styles.companyIcon} fontSize="default"/>
      </Tooltip>
      <p className={styles.companyDescription}>{companyIconTitle}</p>
    </div>
  </div>
);

export { Menu };
