import React, { FunctionComponent } from "react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";
import styles from "./styles.module.scss";
import { capitalize } from "lodash";

export const TimeHumanizer: FunctionComponent<ITimeHumanizerProps> = ({
  className,
  since,
  labelPrefix
}) => {
  const timeString = moment(since).fromNow();
  return (
    <p className={classNames(styles.time, className)}>
      {labelPrefix ? `${labelPrefix} ${timeString}` : capitalize(timeString)}
    </p>
  );
};

interface ITimeHumanizerProps {
  className?: string;
  since?: string;
  labelPrefix?: string;
}
