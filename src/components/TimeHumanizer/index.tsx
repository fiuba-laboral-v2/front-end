import React, { FunctionComponent } from "react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";

import styles from "./styles.module.scss";

const TimeHumanizer: FunctionComponent<ITimeHumanizerProps> = ({ since, className }) => (
  <p className={classNames(styles.time, className)}>
    {moment(1586490154821).fromNow()}
  </p>
);

interface ITimeHumanizerProps {
  since: string | number;
  className?: string;
}

export { TimeHumanizer };
