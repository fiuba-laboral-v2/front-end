import React, { FunctionComponent } from "react";
import { ILinkProps, Link } from "$components/Link";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";

export const NavBarLink: FunctionComponent<INavBarLinkProps> = ({
  text,
  inDrawer,
  icon: Icon,
  ...props
}) => (
  <Tooltip
    classes={{
      tooltip: classNames(styles.tooltip, { [styles.hidden]: inDrawer })
    }}
    title={text}
    placement="right"
  >
    <div className={styles.linkContainer}>
      <Link className={classNames(styles.link, { [styles.inDrawer]: inDrawer })} {...props}>
        <div className={styles.linkContent}>
          <Icon className={styles.icon} />
          <span className={styles.text}>{text}</span>
        </div>
      </Link>
    </div>
  </Tooltip>
);

interface INavBarLinkProps extends ILinkProps {
  icon: FunctionComponent<{ className: string }>;
  inDrawer: boolean;
  text: string;
}
