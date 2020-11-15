import React, { FunctionComponent } from "react";
import { FormControl, FormHelperText, InputLabel, Select } from "@material-ui/core";
import { FastField, FastFieldProps } from "formik";
import { FormikValidator } from "$models/FormikValidator";
import { isEmpty } from "$models/isEmpty";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const SelectField: FunctionComponent<ISelectFieldProps> = ({
  mandatory,
  fieldName,
  options,
  title,
  className,
  helperText
}) => (
  <FastField name={fieldName} validate={FormikValidator({ mandatory })}>
    {({ meta, form }: FastFieldProps) => {
      const error = meta.touched && meta.error;
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
              native
            >
              {isEmpty(meta.value) && <option value="" />}
              {options.map(option => (
                <option
                  key={option.value}
                  value={option.value}
                  selected={meta.value === option.value}
                >
                  {option.label}
                </option>
              ))}
            </Select>
            <FormHelperText>{error || helperText}</FormHelperText>
          </FormControl>
        </>
      );
    }}
  </FastField>
);

interface ISelectFieldProps {
  className?: string;
  helperText?: string;
  mandatory: boolean;
  fieldName: string;
  options: ISelectFieldOption[];
  title: string;
}

interface ISelectFieldOption {
  label: string;
  value: string;
}
