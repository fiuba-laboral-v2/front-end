import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";

const CompanyName: FunctionComponent = ({children}) => <h2 className={styles.name}>{children}</h2>;

export { CompanyName };
