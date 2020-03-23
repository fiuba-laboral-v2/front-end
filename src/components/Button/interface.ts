export interface IButtonProps {
  onClick?: (state: object) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  negative?: boolean;
  secondary?: boolean;
}

