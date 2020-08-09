import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { IField } from "../interfaces";

export const DniField: FunctionComponent<IField> = ({ name, label }) => (
  <TextInput
    name={name}
    label={label}
  />
);
