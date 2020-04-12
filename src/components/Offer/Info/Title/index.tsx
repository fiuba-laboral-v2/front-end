import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";

const Title: FunctionComponent = ({children}) => <h1 className={styles.title}>{children}</h1>;

export { Title };
