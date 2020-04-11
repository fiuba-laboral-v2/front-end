import React, { Fragment, FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { RemoveButton } from "../RemoveButton";

const Tag: FunctionComponent<ITagProps> = ({ name, className, onRemove }) => {
  let removeButton;
  if (onRemove) {
    removeButton = <RemoveButton className={styles.removeButton} onClick={() => onRemove(name)}/>;
  } else {
    removeButton = <Fragment/>;
  }

  return (
    <div className={classNames(styles.tag, className)}>
      {name}
      {removeButton}
    </div>
  );
};

interface ITagProps {
  name: string;
  className: string;
  onRemove?: (tag: string) => void;
}

export { Tag };
