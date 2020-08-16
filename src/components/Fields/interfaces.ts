import { FieldAttributes } from "formik/dist/Field";

export interface IField extends FieldAttributes<any> {
  name: string;
  label: string;
}
