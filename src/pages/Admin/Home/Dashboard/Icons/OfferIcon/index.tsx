import React, { FunctionComponent } from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const OfferIcon: FunctionComponent<IOfferIconProps> = ({ className }) =>
  <LibraryBooksIcon className={classNames(styles.offerIcon, className)} fontSize="default"/>;

interface IOfferIconProps {
  className?: string;
}
