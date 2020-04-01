import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { RemoveButton } from "$components/RemoveButton";
import { FormSection } from "$components/FormSection";

const FieldSet: FunctionComponent<IFieldSetProps> = (
  {
    onRemove,
    children
  }) => (
  <FormSection>
    <div className={styles.childrenContainer}>{children}</div>
    <RemoveButton
      className={styles.remove}
      onClick={onRemove}
    />
  </FormSection>
);

export interface IFieldSetProps {
  onRemove: () => void;
}

export { FieldSet };
