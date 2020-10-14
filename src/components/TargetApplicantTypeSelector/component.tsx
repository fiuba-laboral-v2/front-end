import React, { FunctionComponent } from "react";
import { targetApplicantTypeEnumValues } from "$interfaces/Applicant";
import { FormikValidator } from "$models/FormikValidator";
import { IComponentProps } from "./interfaces";
import { Select } from "formik-material-ui";
import { Field } from "formik";
import { FormControl, FormHelperText, InputLabel } from "@material-ui/core";
import styles from "./styles.module.scss";

const name = "targetApplicantType";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = ({
  translations,
  value,
  error
}) => (
  <FormControl className={styles.container} error={!!error}>
    <InputLabel htmlFor={name}>{translations.title}</InputLabel>
    <Field
      className={styles.select}
      name={name}
      validate={FormikValidator({ mandatory: true })}
      inputProps={{ id: name }}
      component={Select}
      native
    >
      {value === "" && <option value="" />}
      {targetApplicantTypeEnumValues.map(option => (
        <option key={option} value={option}>
          {translations[option]}
        </option>
      ))}
    </Field>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);
