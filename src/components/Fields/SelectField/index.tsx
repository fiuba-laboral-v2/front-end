import React from "react";
import { FormControl, FormHelperText, InputLabel, Select } from "@material-ui/core";
import { FastField, FastFieldProps } from "formik";
import { FormikValidator } from "$models/FormikValidator";
import { isEmpty } from "$models/isEmpty";
import { isNaN } from "lodash";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const SelectField = <Value extends IBaseValue>({
  mandatory,
  fieldName,
  options,
  title,
  className,
  helperText
}: ISelectFieldProps<Value>) => {
  const valueToString = (value: IBaseValue) => (isNaN(value) ? "" : value.toString());

  return (
    <FastField
      name={fieldName}
      validate={(value: number) => FormikValidator({ mandatory })(valueToString(value))}
    >
      {({ meta, form }: FastFieldProps<Value>) => {
        const error = meta.touched && meta.error;
        const stringValue = valueToString(meta.value);
        return (
          <>
            <FormControl className={classNames(styles.container, className)} error={!!error}>
              <InputLabel required={mandatory} htmlFor={fieldName}>
                {title}
              </InputLabel>
              <Select
                className={styles.select}
                id={fieldName}
                onBlur={() => form.setFieldTouched(fieldName, true)}
                onChange={event => form.setFieldValue(fieldName, event.target.value)}
                value={stringValue}
                native
              >
                {isEmpty(stringValue) && <option value="" />}
                {options.map(option => {
                  const stringOptionValue = option.value.toString();
                  return (
                    <option key={stringOptionValue} value={stringOptionValue}>
                      {option.label}
                    </option>
                  );
                })}
              </Select>
              <FormHelperText>{error || helperText}</FormHelperText>
            </FormControl>
          </>
        );
      }}
    </FastField>
  );
};

interface ISelectFieldProps<Value> {
  className?: string;
  helperText?: string;
  mandatory: boolean;
  fieldName: string;
  options: Array<ISelectFieldOption<Value>>;
  title: string;
}

interface ISelectFieldOption<Value> {
  label: string;
  value: Value;
}

interface IBaseValue {
  toString: () => string;
}
