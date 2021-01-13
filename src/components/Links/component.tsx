import React, { Fragment, FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { ILinksProps } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import shortid from "shortid";

const Links: FunctionComponent<ILinksProps> = ({ links, className, linkClassName }) => {
  if (links.length === 0) return <Fragment />;

  return (
    <div className={classNames(styles.links, className)}>
      {links.map(({ uuid = shortid.generate(), url, name }) => (
        <div key={uuid} className={styles.link}>
          <Subtitle className={linkClassName}>
            <a target="_blank" rel="noopener noreferrer" href={url}>
              {name}
            </a>
          </Subtitle>
          <span className={classNames(styles.divider, linkClassName)}> — </span>
        </div>
      ))}
    </div>
  );
};

export { Links };
