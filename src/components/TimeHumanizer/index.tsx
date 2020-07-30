import React, { FunctionComponent } from "react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";
import styles from "./styles.module.scss";

export const TimeHumanizer: FunctionComponent<ITimeHumanizerProps> = (
  {
    className,
    since,
    labelPrefix
  }
) => (
  <p className={classNames(styles.time, className)}>
    {`${labelPrefix} ${moment(since).fromNow()}`}
  </p>
);

interface ITimeHumanizerProps {
  className?: string;
  since: string;
  labelPrefix: string;
}
