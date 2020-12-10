import React, { FunctionComponent } from "react";
import { Links } from "../Links";

export const EmailLink: FunctionComponent<IComponentProps> = ({ className, email, name }) => (
  <Links className={className} links={[{ url: `mailto: ${email}`, name }]} />
);

interface IComponentProps {
  className?: string;
  email: string;
  name: string;
}
