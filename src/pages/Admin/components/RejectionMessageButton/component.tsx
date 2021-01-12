import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";

export const RejectionMessageButton: FunctionComponent<IComponentProps> = ({ label }) => (
  <Button kind="primary">{label}</Button>
);

interface IComponentProps {
  label?: string;
}
