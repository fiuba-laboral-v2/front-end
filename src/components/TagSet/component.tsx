import React, { FunctionComponent, ReactNode } from "react";
import { Tag } from "$components/Tag";
import styles from "./styles.module.scss";

export const TagSet: FunctionComponent<ITagSetProps> = ({ tags, onRemove }) => {
  const children: ReactNode[] = [];
  tags.forEach(tag =>
    children.push(<Tag key={tag} className={styles.item} name={tag} onRemove={onRemove} />)
  );
  return <section className={styles.items}>{children}</section>;
};

interface ITagSetProps {
  tags: Set<string>;
  onRemove?: (tag: string) => void;
}
