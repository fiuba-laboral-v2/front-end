import React, { FunctionComponent } from "react";
import { IDetailDescriptionEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import { DetailDescription } from "$components/Detail/DetailDescription";
import styles from "./styles.module.scss";

const DetailDescriptionEditable: FunctionComponent<IDetailDescriptionEditableProps> = (
  {
    setDescription,
    defaultDescription
  }
) => (
  <Editable
      editableComponent={
        <input
          className={styles.descriptionEditable}
          type="text"
          defaultValue={defaultDescription}
          onChange={event => setDescription(event.target.value)}
        />
      }
      staticComponent={
        <DetailDescription
          description={defaultDescription}
        />
      }
  />
);

export { DetailDescriptionEditable };
