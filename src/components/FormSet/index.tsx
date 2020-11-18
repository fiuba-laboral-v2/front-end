import React, { ReactNode, RefObject, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { AddButton } from "$components/AddButton";
import { FieldArray } from "formik";
import { FieldSet } from "../FieldSet";

export const FormSet = <Value,>({
  title,
  name,
  values,
  defaultValue,
  fields
}: IFormSetProps<Value>) => {
  const autofocusInputRef = useRef<HTMLInputElement>(null);
  const [shouldFocus, setShouldFocus] = useState(false);

  return (
    <FieldArray
      name={name}
      render={arrayHelpers => (
        <>
          <div className={styles.header}>
            <Subtitle className={styles.title}>{title}</Subtitle>
            <AddButton
              onClick={() => {
                arrayHelpers.insert(values.length + 1, defaultValue);
                setShouldFocus(true);
              }}
            />
          </div>
          {values.map((value, index) => (
            <FieldSet
              key={index}
              onRemove={() => {
                arrayHelpers.remove(index);
                setShouldFocus(false);
              }}
            >
              {fields(
                value,
                index,
                shouldFocus && index === values.length - 1 ? autofocusInputRef : undefined
              )}
            </FieldSet>
          ))}
        </>
      )}
    />
  );
};

interface IFormSetProps<Value> {
  title?: string;
  name: string;
  values: Value[];
  defaultValue: Value;
  fields: (
    value: Value,
    index: number,
    autofocusInputRef?: RefObject<HTMLInputElement>
  ) => ReactNode;
}
