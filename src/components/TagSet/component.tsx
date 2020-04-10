import styles from "./styles.module.scss";
import { Tag } from "../Tag";
import React, { FunctionComponent, ReactNode } from "react";

const TagSet: FunctionComponent<ITagSetProps> = ({ tags }) => {
  const children: ReactNode[] = [];
  tags.forEach(tag => children.push(
    <Tag key={tag} className={styles.item} name={tag}/>
  ));
  return <section className={styles.items}>{children}</section>;
};

interface ITagSetProps {
  tags: Set<string>;
}

export { TagSet };
