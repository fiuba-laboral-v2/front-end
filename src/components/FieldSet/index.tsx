import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { RemoveButton } from "$components/RemoveButton";
import { FormSection } from "$components/FormSection";

const FieldSet: FunctionComponent<IFieldSetProps> = (
  {
    onClick,
    children
  }) => (
  <FormSection>
    <div className={styles.childrenContainer}>{children}</div>
    <RemoveButton
      className={styles.removeLink}
      onClick={onClick}
    />
  </FormSection>
);

export interface IFieldSetProps {
  onClick: () => void;
}

export { FieldSet };
