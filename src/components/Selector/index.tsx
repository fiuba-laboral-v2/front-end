import { useField } from "formik";
import React, { FunctionComponent } from "react";
import Select from "react-select";

import styles from "./styles.module.scss";

interface ISelectorProps {
  name: string;
  options: any;
}

const formatGroupLabel = (data: any) => (
  <div className={styles.groupStyles}>
    <span>{data.label}</span>
    <span className={styles.groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const SelectField: FunctionComponent<ISelectorProps> = ({ name, options }) => {
  const [field,, helpers] = useField<string>(name);
  return (
    <Select
      options={options}
      name={field.name}
      value={options ? options.find((option: any) => option.value === field.value) : ""}
      onChange={(option: any): void => {
        helpers.setValue(option.value);
      }}
      onBlur={field.onBlur}
      formatGroupLabel={formatGroupLabel}
    />
  );
};

export default SelectField;
