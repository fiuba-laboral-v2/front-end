import { HTMLProps } from "react";

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  className: "primary" | "secondary" | "warning" | "danger";
  onClick?: (state: object) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  negative?: boolean;
  secondary?: boolean;
}
