import { Field, FieldProps } from "formik";
import React, { useState } from "react";
import { BaseSelector, IBaseSelectorProps } from "../BaseSelector";
import { capitalize, differenceBy, unionBy } from "lodash";
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
            disabled={form.isSubmitting}
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
              const selectedOption = options.find(option =>
                compareValuesBy(getOptionValue(option)) ===
                compareValuesBy(stringToValue(inputValue))
              );
              const selectedValue = selectedOption ?
                getOptionValue(selectedOption) : stringToValue(inputValue);
              form.setFieldValue(
                name,
                unionBy(meta.value, [selectedValue], compareValuesBy)
              );
              setInputValue("");
            }}
          />
          <TagSet
            tags={new Set(meta.value.map(value => toUpperCase(valueToString(value))))}
            onRemove={stringValue =>
              form.setFieldValue(
                name,
                differenceBy(meta.value, [stringToValue(stringValue)], compareValuesBy)
              )
            }
          />
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
