import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { targetApplicantTypeEnumValues } from "$interfaces/Applicant";
import { FormikValidator } from "$models/FormikValidator";
import { IComponentProps } from "./interfaces";
import { FastField, FastFieldProps } from "formik";
import { FormControl, FormHelperText, InputLabel, Select } from "@material-ui/core";
import styles from "./styles.module.scss";

const name = "targetApplicantType";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  mandatory = false
}) => (
  <FastField name={name} validate={FormikValidator({ mandatory })}>
    {({ meta, form }: FastFieldProps) => {
      const error = meta.touched && meta.error;
      return (
        <>
          <FormControl className={classNames(className, styles.container)} error={!!error}>
            <InputLabel required={mandatory} htmlFor={name}>
              {translations.title}
            </InputLabel>
            <Select
              className={styles.select}
              id={name}
              onBlur={() => form.setFieldTouched(name, true)}
              onChange={event => form.setFieldValue(name, event.target.value)}
              native
            >
              {meta.value === "" && <option value="" />}
              {targetApplicantTypeEnumValues.map(option => (
                <option key={option} value={option}>
                  {translations[option]}
                </option>
              ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        </>
      );
    }}
  </FastField>
);
