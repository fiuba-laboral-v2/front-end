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
      {({ meta, form }: FieldProps<Value[]>) => {
        return (
          <>
            <BaseSelector
              {...props}
              freeSolo
              disableClearable
              className={styles.selector}
              initialValue={initialValue}
              inputValue={toUpperCase(inputValue)}
              options={options}
              getOptionValue={getOptionValue}
              getOptionLabel={(option: Option | string) =>
                typeof option === "string" ? option : getOptionLabel(option)
              }
              errorMessage={meta.touched ? meta.error : undefined}
              onBlur={() => {
                form.setFieldTouched(name, true);
                setInputValue("");
              }}
              onInputChange={(event, value) => setInputValue(value)}
              onKeyPress={event => event.key === "Enter" ? setInputValue("") : undefined}
              onChange={(event, option: Option | string | null) => {
                if (!option) return;
                form.setFieldValue(name, unionBy(
                  meta.value,
                  [typeof option === "string" ? stringToValue(option) : getOptionValue(option)],
                  compareValuesBy
                ));
              }}
            />
            <TagSet tags={meta.value.map(value => toUpperCase(valueToString(value)))}/>
          </>
        );
      }}
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
