import React, { FunctionComponent } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./styles.module.scss";

export const ChangePasswordAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  onClickChangePasswordIcon
}) => (
  <Tooltip title={tooltipMessage}>
    <button className={styles.button}>
      <VpnKeyIcon className={styles.icon} fontSize="small" onClick={onClickChangePasswordIcon} />
    </button>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  onClickChangePasswordIcon: () => void;
}
