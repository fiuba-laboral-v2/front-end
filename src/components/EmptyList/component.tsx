import React, { FunctionComponent } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { Button } from "$components/Button";

import { IEmptyListProps } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const EmptyList: FunctionComponent<IEmptyListProps> = ({
  onClick,
  buttonKind,
  className,
  translations: { text, button }
}) => {
  return (
    <div className={classNames(className, styles.container)}>
      <SearchIcon fontSize="large" />
      <p className={styles.text}>{text}</p>
      <Button kind={buttonKind} onClick={onClick}>
        {button}
      </Button>
    </div>
  );
};
