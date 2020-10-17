import React, { FunctionComponent } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { Button } from "$components/Button";

import { IEmptyListProps } from "./interface";
import styles from "./styles.module.scss";

export const EmptyList: FunctionComponent<IEmptyListProps> = ({
  onClick,
  translations: { text, button }
}) => {
  return (
    <div className={styles.container}>
      <SearchIcon fontSize="large" />
      <p className={styles.text}>{text}</p>
      <Button kind="primary" onClick={onClick}>
        {button}
      </Button>
    </div>
  );
};
