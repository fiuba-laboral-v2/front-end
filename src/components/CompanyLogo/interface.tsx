export interface ICompanyLogoProps {
  companyName: string;
  logo?: string;
  size: "small" | "medium" | "large" | "extraLarge";
  className?: string;
  onClick?: () => void;
}
