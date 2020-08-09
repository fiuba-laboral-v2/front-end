import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { UserFields } from "./component";

export const UserFieldsContainer: FunctionComponent<IUserFieldsContainerProps> = (
  {
    email,
    name,
    surname
  }
) => {
  const translations = useTranslations<IUserFieldsTranslations>("userFields");
  if (!translations) return <Fragment />;
  return (
    <UserFields
      email={{ name: email, label: translations.email }}
      name={{ name: name, label: translations.name }}
      surname={{ name: surname, label: translations.surname }}
    />
  );
};

interface IUserFieldsTranslations {
  email: string;
  name: string;
  surname: string;
}

interface IUserFieldsContainerProps {
  email: string;
  name: string;
  surname: string;
}
