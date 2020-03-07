import React, { FunctionComponent } from "react";
import { IListEditableProps } from "./interface";
import styles from "./styles.module.scss";
import { Editable } from "../Editable";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { InputEditable } from "$components/InputEditable";

const ListEditable: FunctionComponent<IListEditableProps> = (
  {
    setList,
    list,
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
            <ApplicantItemsDetail
              items={list}
              title={title}
            />
            <InputEditable className={styles.input} type={"text"} onChange={setList}/>
          </div>
        }
        staticComponent={
          <div className={styles.listContainer}>
            <ApplicantItemsDetail
              items={list}
              title={title}
            />
          </div>
        }
      />
    </div>
);

export { ListEditable };
