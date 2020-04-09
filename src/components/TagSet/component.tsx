import styles from "./styles.module.scss";
import { Tag } from "../Tag";
import React, { FunctionComponent } from "react";

const TagSet: FunctionComponent<ITagSetProps> = ({ tags }) => (
  <section className={styles.items}>
    {tags.map((tag, index) =>
      <Tag key={index} className={styles.item} name={tag}/>
    )}
  </section>
);

interface ITagSetProps {
  tags: string[];
}

export { TagSet };
