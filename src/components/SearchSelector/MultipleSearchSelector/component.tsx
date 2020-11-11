import React, { useState } from "react";
import { Field, FieldProps } from "formik";
import { FormikValidator } from "$models/FormikValidator";
import { differenceBy, unionBy } from "lodash";
import { TextFormatter } from "$models/TextFormatter";
import { BaseSearchSelector } from "../BaseSearchSelector";
import { TagSet } from "$components/TagSet";
import { IMultipleSelectorComponentProps } from "./interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const MultipleSearchSelector = <Option, Value>({
  className,
  name,
  getOptionValue,
  stringToValue,
  valueToString,
  compareValuesBy,
  options,
  initialValue,
  getOptionLabel,
  allowOnlySelectableOptions,
  mandatory = false,
  ...props
}: IMultipleSelectorComponentProps<Option, Value>) => {
  const [inputValue, setInputValue] = useState("");
  const selectedOptionExists = (selectedValue: Value) =>
    options.find(
      option => compareValuesBy(selectedValue) === compareValuesBy(getOptionValue(option))
    );

  return (
    <Field name={name} validate={FormikValidator({ mandatory })}>
      {({ meta, form }: FieldProps<Value[]>) => {
        const addValue = (value: string) => {
          const selectedOption = options.find(
            option =>
              compareValuesBy(getOptionValue(option)) === compareValuesBy(stringToValue(value))
          );
          const selectedValue = selectedOption
            ? getOptionValue(selectedOption)
            : stringToValue(value);
          if (!selectedOptionExists(selectedValue) && allowOnlySelectableOptions) {
            return setInputValue("");
          }
          form.setFieldValue(name, unionBy(meta.value, [selectedValue], compareValuesBy));
          setInputValue("");
        };

        return (
          <div className={classNames(className, styles.container)}>
            <BaseSearchSelector
              {...props}
              mandatory={mandatory}
              freeSolo
              disableClearable
              disabled={form.isSubmitting}
              className={styles.selector}
              initialValue={initialValue}
              onInputChange={(event: any, value) => {
                if (
                  !event ||
                  event.nativeEvent.constructor.name === "MouseEvent" ||
                  event.key === "Enter"
                ) {
                  addValue(value);
                } else {
                  setInputValue(value);
                }
              }}
              inputValue={valueToString(stringToValue(inputValue))}
              errorMessage={meta.touched ? meta.error : undefined}
              options={options.filter(
                option =>
                  !meta.value.map(valueToString).includes(valueToString(getOptionValue(option)))
              )}
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
                if (inputValue === "") return;
                addValue(inputValue);
              }}
            />
            <TagSet
              tags={
                new Set(meta.value.map(value => TextFormatter.capitalize(valueToString(value))))
              }
              onRemove={stringValue =>
                form.setFieldValue(
                  name,
                  differenceBy(meta.value, [stringToValue(stringValue)], compareValuesBy)
                )
              }
            />
          </div>
        );
      }}
    </Field>
  );
};
