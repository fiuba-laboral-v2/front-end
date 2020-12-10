import React, { FunctionComponent } from "react";
import { Links } from "../Links";

export const EmailLink: FunctionComponent<IComponentProps> = ({ email, name }) => (
  <Links links={[{ url: `mailto: ${email}`, name }]} />
);

interface IComponentProps {
  email: string;
  name: string;
}
