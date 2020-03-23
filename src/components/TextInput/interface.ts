import { HTMLProps } from "react";

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}
