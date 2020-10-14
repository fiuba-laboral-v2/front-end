import React, { FunctionComponent } from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const OfferIcon: FunctionComponent<SvgIconProps> = ({ className, ...props }) => (
  <LibraryBooksIcon
    {...props}
    className={classNames(styles.offerIcon, className)}
    fontSize="default"
  />
);
