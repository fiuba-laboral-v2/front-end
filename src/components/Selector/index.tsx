import { Field, FieldProps } from "formik";
import React, { ChangeEvent, useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { identity } from "lodash";

export const Selector = <Option, Value>(
  {
    name,
    label,
    options,
    className,
    validate,
    getOptionLabel,
    getOptionValue = identity,
    initialValue
  }: ISelectorProps<Option, Value>
) => {
  const [defaultValue] = useState(options.find(option => getOptionValue(option) === initialValue));

  return (
    <Field name={name} validate={validate}>
      {({ meta, form }: FieldProps) => {
        const setTouched = () => {
          form.setFieldTouched(name, true);
        };

        const setValue = (value?: Option | null) => {
          form.setFieldValue(name, value ? getOptionValue(value) : undefined);
        };

        return (
          <Autocomplete<Option>
            className={classNames(className, styles.selector)}
            options={options}
            getOptionLabel={getOptionLabel}
            onChange={(event: ChangeEvent<{}>, option: Option | null) => setValue(option)}
            onBlur={setTouched}
            defaultValue={defaultValue}
            renderInput={props =>
              <TextField
                {...props}
                label={label}
                error={!!meta.error && meta.touched}
                helperText={meta.touched && meta.error}
              />
            }
          />
        );
      }}
    </Field>
  );
};

interface ISelectorProps<Option, Value> {
  name: string;
  label?: string;
  options: Option[];
  className?: string;
  validate?: (option?: Option) => string | undefined;
  getOptionLabel: (option: Option) => string;
  getOptionValue?: (option: Option) => Value;
  initialValue?: Value;
}
