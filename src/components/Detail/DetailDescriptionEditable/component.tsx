import React, { FunctionComponent } from "react";
import { IDetailDescriptionEditableProps } from "./interface";
import styles from "./styles.module.scss";

const DetailDescriptionEditable: FunctionComponent<IDetailDescriptionEditableProps> = (
  {
    setDescription,
    submit,
    defaultDescription
  }
) => (
  <div>
    <input
      className={styles.descriptionEditable}
      type="text"
      defaultValue={defaultDescription}
      onChange={event => setDescription(event.target.value)}
    />
    <button
      className={styles.descriptionButtonSubmit}
      onClick={submit}
    >
      &#10003;
    </button>
  </div>
);

export { DetailDescriptionEditable };
