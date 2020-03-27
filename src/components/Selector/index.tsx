import { useField } from "formik";
import React, { ChangeEvent, FunctionComponent } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { ISelectorOption } from "./interface";

interface ISelectorProps {
  name: string;
  options: ISelectorOption[];
}

export const Selector: FunctionComponent<ISelectorProps> = ({ name, options }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Autocomplete<ISelectorOption>
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
          label="Combo box"
          error={!!meta.error}
          helperText={meta.error}
        />
      }
    />
  );
};
