import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import styles from "./styles.module.scss";

export const OpenDetailIcon: FunctionComponent<IListContentItemProps> = ({ detailRoute }) => {
  const history = useHistory();
  return (
    <OpenInNewIcon
      className={styles.icon}
      fontSize="small"
      onClick={() => history.push(detailRoute)}
    />
  );
};

interface IListContentItemProps {
  detailRoute: string;
}
