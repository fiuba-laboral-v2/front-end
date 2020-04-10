import React, { Fragment, FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { ILinksProps } from "./interface";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Links: FunctionComponent<ILinksProps> = ({ links, className }) => {
  if (links.length === 0) return <Fragment/>;

  return (
    <div className={classNames(styles.links, className)}>
      {
        links.map(({ url, name }, index) =>
          <div key={index} className={styles.link}>
            <Subtitle>
              <a target="_blank" rel="noopener noreferrer" href={url}>{name}</a>
            </Subtitle>
            <span className={styles.divider}> — </span>
          </div>
        )
      }
    </div>
  );
};

export { Links };
