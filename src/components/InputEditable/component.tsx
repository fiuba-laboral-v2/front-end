import React, { FunctionComponent } from "react";
import { IInputEditableProps } from "./interface";
import styles from "./styles.module.scss";

const InputEditable: FunctionComponent<IInputEditableProps> = (
  {
    defaultValue,
    onChange
  }) => (
  <input
    className={styles.fieldEditable}
    type="text"
    autoFocus
    defaultValue={defaultValue ? `${defaultValue}`: ""}
    onChange={event => onChange(event.target.value)}
  />
);

export { InputEditable };
