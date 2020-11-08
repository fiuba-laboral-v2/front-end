import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

export const CloseButton: FunctionComponent<ICloseButtonProps> = ({ onClick }) => (
  <IconButton disableRipple size="small" onClick={onClick}>
    <CloseIcon fontSize="small" className={styles.closeIcon} />
  </IconButton>
);

type ICloseButtonProps = {
  onClick: () => void;
};
