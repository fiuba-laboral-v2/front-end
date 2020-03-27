import { useField } from "formik";
import React, { ChangeEvent, FunctionComponent } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { ICareersMapper } from "$pages/Applicant/SignUp/interfaces";

interface ISelectorProps {
  name: string;
  options: ICareersMapper[];
}

export const Selector: FunctionComponent<ISelectorProps> = ({ name, options }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Autocomplete<ICareersMapper>
      options={options}
      getOptionLabel={option => option.label}
      onBlur={field.onBlur}
      onChange={(event: ChangeEvent<{}>, option: ICareersMapper | null) =>
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
