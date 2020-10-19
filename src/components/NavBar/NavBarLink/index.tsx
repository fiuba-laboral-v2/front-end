import React, { FunctionComponent } from "react";
import { ILinkProps, Link } from "$components/Link";
import styles from "./styles.module.scss";

export const NavBarLink: FunctionComponent<ILinkProps> = ({ children, ...props }) => (
  <Link className={styles.link} {...props}>
    <div className={styles.linkContent}>
      <span>{children}</span>
    </div>
  </Link>
);
