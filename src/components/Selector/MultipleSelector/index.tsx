import { Field, FieldProps } from "formik";
import React, { useState } from "react";
import { BaseSelector, IBaseSelectorProps } from "../BaseSelector";
import { unionBy } from "lodash";

export const MultipleSelector = <Option, Value>(
  {
    name,
    validate,
    getOptionValue,
    stringToValue,
    compareValuesBy,
    options,
    initialValue,
    getOptionLabel,
    ...props
  }: IMultipleSelectorProps<Option, Value>
) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Field name={name} validate={validate}>
      {({ meta, form }: FieldProps<Value[]>) => {
        return (
          <>
            <BaseSelector
              {...props}
              freeSolo
              disableClearable
              initialValue={initialValue}
              inputValue={inputValue}
              options={options}
              getOptionValue={getOptionValue}
              getOptionLabel={(option: Option | string) =>
                typeof option === "string" ? option : getOptionLabel(option)
              }
              errorMessage={meta.touched ? meta.error : undefined}
              onBlur={() => form.setFieldTouched(name, true)}
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
            {meta.value.map((value, index) => (
              <div key={index}>{JSON.stringify(value)}</div>
            ))}
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
  compareValuesBy: (value: Value) => any;
}
