import { FieldValidator } from "formik/dist/types";

export interface IBaseProps {
  name: string;
  label: string;
  className?: string;
  fast?: boolean;
  withoutMargin?: boolean;
}

export interface IValidatorProps extends IBaseProps {
  validate: FieldValidator;
}
