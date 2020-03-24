import { HTMLProps } from "react";

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  name: string;
  label: string;
}
