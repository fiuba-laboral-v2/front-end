import { Field, FieldProps } from "formik";
import React, { useState } from "react";
import { BaseSelector, IBaseSelectorProps } from "../BaseSelector";
import { capitalize, unionBy } from "lodash";
import { TagSet } from "../../TagSet";
import styles from "./styles.module.scss";

export const MultipleSelector = <Option, Value>(
  {
    name,
    validate,
    getOptionValue,
    stringToValue,
    valueToString,
    compareValuesBy,
    options,
    initialValue,
    getOptionLabel,
    ...props
  }: IMultipleSelectorProps<Option, Value>
) => {
  const [inputValue, setInputValue] = useState("");
  const toUpperCase = (label: string) => label.split(" ").map(capitalize).join(" ");

  return (
    <Field name={name} validate={validate}>
      {({ meta, form }: FieldProps<Value[]>) => (
        <>
          <BaseSelector
            {...props}
            freeSolo
            disableClearable
            className={styles.selector}
            initialValue={initialValue}
            onInputChange={(event, value) => setInputValue(value)}
            inputValue={toUpperCase(inputValue)}
            errorMessage={meta.touched ? meta.error : undefined}
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={(option: Option | string) =>
              typeof option === "string" ? option : getOptionLabel(option)
            }
            onBlur={() => {
              form.setFieldTouched(name, true);
              setInputValue("");
            }}
            onKeyPress={event => {
              if (event.key !== "Enter") return;
              event.preventDefault();
              const newValue = unionBy(meta.value, [stringToValue(inputValue)], compareValuesBy);
              form.setFieldValue(name, newValue);
              setInputValue("");
            }}
          />
          <TagSet tags={new Set(meta.value.map(value => toUpperCase(valueToString(value))))}/>
        </>
      )}
    </Field>
  );
};

interface IMultipleSelectorProps<Option, Value> extends IBaseSelectorProps<Option, Value> {
  name: string;
  validate?: (option?: Option[]) => string | undefined;
  stringToValue: (inputValue: string) => Value;
  valueToString: (value: Value) => string;
  compareValuesBy: (value: Value) => any;
}
