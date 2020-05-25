import React, { FunctionComponent } from "react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";

import styles from "./styles.module.scss";

const TimeHumanizer: FunctionComponent<ITimeHumanizerProps> = ({ since, className }) => (
  <p className={classNames(styles.time, className)}>
    {moment(parseInt(since, 10)).fromNow()}
  </p>
);

interface ITimeHumanizerProps {
  since: string;
  className?: string;
}

export { TimeHumanizer };
