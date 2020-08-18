import React, { FunctionComponent, useState } from "react";
import { identity, unionBy } from "lodash";
import { TargetApplicantType } from "$interfaces/Offer";
import { TextFormatter } from "$models/TextFormatter";
import { Field, FieldProps } from "formik";
import { BaseSelector } from "$components/Selector/BaseSelector";
import { Tag } from "$components/Tag";
import styles from "../Selector/MultipleSelector/styles.module.scss";

export const TargetApplicantTypeSelector: FunctionComponent<ITargetApplicantTypeSelector> = (
  {
    label
  }
) => {
  const [inputValue, setInputValue] = useState("");
  const options = Object.keys(TargetApplicantType);
  const name = "targetApplicantType";

  return (
    <Field name={name} >
      {({ meta, form }: FieldProps<string>) => (
        <>
          <BaseSelector
            label={label}
            freeSolo
            disableClearable
            disabled={form.isSubmitting}
            className={styles.selector}
            onInputChange={(event, value) => setInputValue(value)}
            inputValue={inputValue}
            errorMessage={meta.touched ? meta.error : undefined}
            options={options}
            getOptionValue={identity}
            getOptionLabel={(target: string) => target}
            onBlur={() => {
              form.setFieldTouched(name, true);
              setInputValue("");
            }}
            onKeyPress={event => {
              if (event.key !== "Enter") return;
              event.preventDefault();
              const selectedOption = options.find(target =>
                target.toLowerCase() === inputValue.toLowerCase()
              );
              const selectedValue = selectedOption ? identity(selectedOption) : inputValue;
              form.setFieldValue(name, selectedValue);
              setInputValue("");
            }}
          />
          <Tag
            className={""}
            name={TextFormatter.capitalize(meta.value)}
            onRemove={stringValue => form.setFieldValue(name, stringValue)}
          />
        </>
      )}
    </Field>
  );
};

interface ITargetApplicantTypeSelector {
  label: string;
}
