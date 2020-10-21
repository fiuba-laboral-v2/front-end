import React, { FunctionComponent } from "react";
import { ILinkProps, Link } from "$components/Link";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const NavBarLink: FunctionComponent<INavBarLinkProps> = ({
  children,
  inDrawer,
  icon: Icon,
  ...props
}) => (
  <Link className={classNames(styles.link, { [styles.inDrawer]: inDrawer })} {...props}>
    <div className={styles.linkContent}>
      <Icon className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </div>
  </Link>
);

interface INavBarLinkProps extends ILinkProps {
  icon: FunctionComponent<{ className: string }>;
  inDrawer: boolean;
}
