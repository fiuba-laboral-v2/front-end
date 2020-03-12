import React, { FunctionComponent } from "react";
import { IEditableCapabilitiesProps } from "./interface";
import { ItemsDetailEditable } from "$components/Detail/ItemsDetailEditable";
import styles from "../../Detail/ItemsDetailEditable/styles.module.scss";
import { InputEditable } from "../../InputEditable";
import { ICapability } from "../../../interfaces/Applicant";

const EditableCapabilities: FunctionComponent<IEditableCapabilitiesProps> = (
  {
    setState,
    onFinish,
    onDelete,
    capabilities,
    title
  }) => (
    <ItemsDetailEditable
      onDelete={onDelete}
      titleTranslation={title}
      items={
        capabilities.map(({ description }: ICapability) => {
          return {
            id: description,
            value: description
          };
        })
      }
      onFinish={onFinish}
    >
      <InputEditable className={styles.input} type={"text"} onChange={setState}/>
    </ItemsDetailEditable>
);

export { EditableCapabilities };
