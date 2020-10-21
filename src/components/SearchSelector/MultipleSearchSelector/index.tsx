import { Field, FieldProps } from "formik";
import React, { useState } from "react";

import { BaseSearchSelector, IBaseSelectorProps } from "../BaseSearchSelector";
import { TagSet } from "$components/TagSet";

import { differenceBy, unionBy } from "lodash";
import { TextFormatter } from "$models/TextFormatter";

import styles from "./styles.module.scss";

export const MultipleSearchSelector = <Option, Value>({
  name,
  validate,
  getOptionValue,
  stringToValue,
  valueToString,
  compareValuesBy,
  options,
  initialValue,
  getOptionLabel,
  allowNewOption,
  ...props
}: IMultipleSelectorProps<Option, Value>) => {
  const [inputValue, setInputValue] = useState("");
  const selectedOptionExists = (selectedValue: Value) =>
    options.find(
      option => compareValuesBy(selectedValue) === compareValuesBy(getOptionValue(option))
    );

  return (
    <Field name={name} validate={validate}>
      {({ meta, form }: FieldProps<Value[]>) => (
        <div className={styles.container}>
          <BaseSearchSelector
            {...props}
            freeSolo
            disableClearable
            disabled={form.isSubmitting}
            className={styles.selector}
            initialValue={initialValue}
            onInputChange={(_, value) => setInputValue(value)}
            inputValue={valueToString(stringToValue(inputValue))}
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
              const selectedOption = options.find(
                option =>
                  compareValuesBy(getOptionValue(option)) ===
                  compareValuesBy(stringToValue(inputValue))
              );
              const selectedValue = selectedOption
                ? getOptionValue(selectedOption)
                : stringToValue(inputValue);
              if (!selectedOptionExists(selectedValue) && allowNewOption) return setInputValue("");
              form.setFieldValue(name, unionBy(meta.value, [selectedValue], compareValuesBy));
              setInputValue("");
            }}
          />
          <TagSet
            tags={new Set(meta.value.map(value => TextFormatter.capitalize(valueToString(value))))}
            onRemove={stringValue =>
              form.setFieldValue(
                name,
                differenceBy(meta.value, [stringToValue(stringValue)], compareValuesBy)
              )
            }
          />
        </div>
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
  allowNewOption?: boolean;
}
