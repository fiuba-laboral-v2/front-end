import React, { FunctionComponent } from "react";
import { EmailField } from "../EmailField";
import { NameField } from "../NameField";
import { IField } from "../interfaces";

export const UserFields: FunctionComponent<IUserFieldsProps> = (
  {
    email,
    name,
    surname
  }
) => (
  <>
    <EmailField {...email}/>
    <NameField {...name} />
    <NameField {...surname} />
  </>
);

interface IUserFieldsProps {
  email: IField;
  name: IField;
  surname: IField;
}
