import React, { FunctionComponent } from "react";
import { ICapabilitiesEditableProps } from "./interface";
import styles from "./styles.module.scss";
import { Editable } from "$components/Editable";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { InputEditable } from "$components/InputEditable";

const CapabilitiesEditable: FunctionComponent<ICapabilitiesEditableProps> = (
  {
    setList,
    capabilities,
    title,
    onFinish
  }) => (
    <div className={styles.listEditableContainer}>
      <Editable
        onClick={() => {
          if (onFinish) onFinish();
        }}
        editableComponent={
          <div className={styles.listContainer}>
            <ItemsDetail
              items={capabilities}
              title={title}
            />
            <InputEditable className={styles.input} type={"text"} onChange={setList}/>
          </div>
        }
        staticComponent={
          <div className={styles.listContainer}>
            <ItemsDetail
              items={capabilities}
              title={title}
            />
          </div>
        }
      />
    </div>
);

export { CapabilitiesEditable };
