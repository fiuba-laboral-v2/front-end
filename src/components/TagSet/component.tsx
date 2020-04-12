import styles from "./styles.module.scss";
import { Tag } from "../Tag";
import React, { FunctionComponent, ReactNode } from "react";

const TagSet: FunctionComponent<ITagSetProps> = ({ tags, onRemove }) => {
  const children: ReactNode[] = [];
  tags.forEach(tag => children.push(
    <Tag key={tag} className={styles.item} name={tag} onRemove={onRemove}/>
  ));
  return <section className={styles.items}>{children}</section>;
};

interface ITagSetProps {
  tags: Set<string>;
  onRemove?: (tag: string) => void;
}

export { TagSet };
