import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";

const NotFoundPage: FunctionComponent = () => (
  <div>
    <img src={"images/notFound.jpg"} alt="notFound" className={styles.notFound}/>
    <div>
      <h1 className={styles.notFoundText}>404</h1>
    </div>
  </div>
);

export default NotFoundPage;
