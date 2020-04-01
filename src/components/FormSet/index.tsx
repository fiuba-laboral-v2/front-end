import React, { FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { AddButton } from "$components/AddButton";
import { FieldArray } from "formik";
import { FieldSet } from "../FieldSet";

const FormSet: FunctionComponent<IFormSetProps<any>> = (
  {
    title,
    name,
    values,
    defaultValue,
    form
  }) => (
  <FieldArray
    name={name}
    render={arrayHelpers => (
      <>
        <div className={styles.header}>
          <Subtitle>{title}</Subtitle>
          <AddButton onClick={() => arrayHelpers.insert(values.length + 1, defaultValue)}/>
        </div>
        {values.map((value, index) => (
          <FieldSet key={index} onRemove={() => arrayHelpers.remove(index)}>
            {form(value, index)}
          </FieldSet>
        ))}
      </>
    )}
  />
);

export interface IFormSetProps<Value> {
  title: string;
  name: string;
  values: Value[];
  defaultValue: Value;
  form: (value: Value, index: number) => ReactNode;
}

export { FormSet };
