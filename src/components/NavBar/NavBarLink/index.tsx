import React, { FunctionComponent } from "react";
import { ILinkProps, Link } from "$components/Link";
import styles from "./styles.module.scss";

export const NavBarLink: FunctionComponent<INavBarLinkProps> = ({
  children,
  icon: Icon,
  ...props
}) => (
  <Link className={styles.link} {...props}>
    <div className={styles.linkContent}>
      <Icon className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </div>
  </Link>
);

interface INavBarLinkProps extends ILinkProps {
  icon: FunctionComponent<{ className: string }>;
}
