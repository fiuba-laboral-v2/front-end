import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { AddButton } from "$components/AddButton";
import { FieldArray } from "formik";
import { FieldSet } from "../FieldSet";

export const FormSet = <Value extends object>(
  {
    title,
    name,
    values,
    defaultValue,
    fields
  }: IFormSetProps<Value>
) => (
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
            {fields(value, index)}
          </FieldSet>
        ))}
      </>
    )}
  />
);

interface IFormSetProps<Value> {
  title: string;
  name: string;
  values: Value[];
  defaultValue: Value;
  fields: (value: Value, index: number) => ReactNode;
}
