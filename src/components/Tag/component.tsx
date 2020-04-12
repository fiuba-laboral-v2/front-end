import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { RemoveButton } from "../RemoveButton";

const Tag: FunctionComponent<ITagProps> = ({ name, className, onRemove }) => (
  <div className={classNames(styles.tag, className)}>
    {name}
    {onRemove && <RemoveButton
        className={styles.removeButton}
        onClick={() => onRemove(name)}
    />}
  </div>
);

interface ITagProps {
  name: string;
  className: string;
  onRemove?: (tag: string) => void;
}

export { Tag };
