import { IBaseSelectorProps } from "../BaseSearchSelector";

export interface IMultipleSelectorContainerProps<Option, Value>
  extends IBaseSelectorProps<Option, Value> {
  name: string;
  stringToValue: (inputValue: string) => Value;
  valueToString: (value: Value) => string;
  compareValuesBy: (value: Value) => any;
  allowOnlySelectableOptions?: boolean;
}

export interface IMultipleSelectorComponentProps<Option, Value>
  extends IMultipleSelectorContainerProps<Option, Value> {
  helperText?: string;
}
