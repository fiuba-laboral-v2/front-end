import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { Links } from "$components/Links";
import styles from "./styles.module.scss";

export const Member: FunctionComponent<IMemberProps> = ({name, gitHubLink, linkedInLink}) => {
  const links = [];
  if (gitHubLink) links.push({ name: "GitHub", url: gitHubLink });
  if (linkedInLink) links.push({ name: "LinkedIn", url: linkedInLink });

  return (
    <div className={styles.member}>
      <Subtitle>{name}</Subtitle>
      {links.length > 0 && <Links className={styles.linksContainer} linkClassName={styles.links} links={links} />}
    </div>
  );
};

interface IMemberProps {
  name: string;
  gitHubLink?: string;
  linkedInLink?: string;
}
