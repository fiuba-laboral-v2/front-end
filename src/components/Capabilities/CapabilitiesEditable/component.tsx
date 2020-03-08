import React, { FunctionComponent } from "react";
import { ICapabilitiesEditableProps } from "./interface";
import { ItemsDetailEditable } from "$components/Detail/ItemsDetailEditable";
import styles from "../../Detail/ItemsDetailEditable/styles.module.scss";
import { InputEditable } from "../../InputEditable";

const CapabilitiesEditable: FunctionComponent<ICapabilitiesEditableProps> = (
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
      items={capabilities || []}
      onFinish={onFinish}>
      <InputEditable className={styles.input} type={"text"} onChange={setState}/>
    </ItemsDetailEditable>
);

export { CapabilitiesEditable };
