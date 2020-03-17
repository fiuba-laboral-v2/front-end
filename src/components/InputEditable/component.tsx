import React, { FunctionComponent } from "react";
import { IInputEditableProps } from "./interface";
import styles from "./styles.module.scss";

const InputEditable: FunctionComponent<IInputEditableProps> = (
  {
    className,
    defaultValue,
    onChange,
    type,
    min
  }) => (
  <input
    className={`${styles.fieldEditable} ${className}`}
    min={min}
    type={type}
    autoFocus
    defaultValue={defaultValue ? `${defaultValue}`: ""}
    onChange={event => onChange(event.target.value)}
  />
);

export { InputEditable };
