import React, { FunctionComponent } from "react";
import { ILinksProps } from "./interface";
import styles from "./styles.module.scss";

const Links: FunctionComponent<ILinksProps> = ({ links, className }) => (
    <div className={`${styles.links} ${className}`}>
      {
        links.map((link, index) =>
          <div key={index} className={styles.link}>
            <a target="_blank" rel="noopener noreferrer" href={link.href}>{link.name}</a>
            <span className={styles.divider}> — </span>
          </div>
        )
      }
    </div>
);

export { Links };
