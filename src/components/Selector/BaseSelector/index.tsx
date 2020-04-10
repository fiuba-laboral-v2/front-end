import React, { KeyboardEventHandler, useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const BaseSelector = <Option, Value>(
  {
    label,
    className,
    getOptionValue,
    initialValue,
    errorMessage,
    options,
    ...autocompleteProps
  }: IBaseSelectorProps<Option, Value>
) => {
  const [defaultValue] = useState(options.find(option => getOptionValue(option) === initialValue));

  return (
    <Autocomplete<Option>
      {...autocompleteProps}
      selectOnFocus
      className={classNames(className, styles.selector)}
      defaultValue={defaultValue}
      multiple={false}
      options={options}
      renderInput={inputProps =>
        <TextField
          {...inputProps}
          label={label}
          error={!!errorMessage}
          helperText={errorMessage}
        />
      }
    />
  );
};

export interface IBaseSelectorProps<Option, Value> {
  className?: string;
  label?: string;
  getOptionValue: (option: Option) => Value;
  initialValue?: Value;
  errorMessage?: string;
  getOptionLabel: (option: Option) => string;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<{}>, value: Option | null) => void;
  onInputChange?: (event: React.ChangeEvent<{}>, value: string) => void;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  options: Option[];
  freeSolo?: boolean;
  disableClearable?: boolean;
  inputValue?: string;
}
