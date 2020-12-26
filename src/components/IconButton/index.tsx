import React, { FunctionComponent } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "./styles.module.scss";

export const IconButton: FunctionComponent<IComponentProps> = ({ Icon, onClick }) => (
  <button className={styles.button}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icon} fontSize="small" onClick={onClick} />
    </div>
  </button>
);

interface IComponentProps {
  Icon: FunctionComponent<SvgIconProps>;
  onClick: () => void;
}
