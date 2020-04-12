import React, { FunctionComponent } from "react";
import moment from "moment";
import "moment/locale/es";

import styles from "./styles.module.scss";

const TimeHumanizer: FunctionComponent<ITimeHumanizerProps> = ({since}) => (
  <p className={styles.time}>
    {moment(`${since}`).fromNow()}
  </p>
);

interface ITimeHumanizerProps {
  since: Date | string;
}

export { TimeHumanizer };
