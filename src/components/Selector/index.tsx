import { useField } from "formik";
import React, { ChangeEvent, FunctionComponent } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

interface ISelectorOption {
  value: string;
  label: string;
}

interface ISelectorProps {
  name: string;
  label?: string;
  options: ISelectorOption[];
  className?: string;
}

export const Selector: FunctionComponent<ISelectorProps> = (
  {
    name,
    label,
    options,
    className
  }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Autocomplete<ISelectorOption>
      className={className}
      options={options}
      getOptionLabel={option => option.label}
      onBlur={field.onBlur}
      onChange={(event: ChangeEvent<{}>, option: ISelectorOption | null) =>
        helpers.setValue(option?.value)
      }
      renderInput={params =>
        <TextField
          {...params}
          name={field.name}
          label={label}
          error={!!meta.error}
          helperText={meta.error}
        />
      }
    />
  );
};
