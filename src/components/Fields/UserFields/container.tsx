import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { UserFields } from "./component";

export const UserFieldsContainer: FunctionComponent = () => {
  const translations = useTranslations<IUserFieldsTranslations>("userFields");
  if (!translations) return <Fragment />;
  return (
    <UserFields
      email={{ name: "user.email", label: translations.email }}
      name={{ name: "user.name", label: translations.name }}
      surname={{ name: "user.surname", label: translations.surname }}
    />
  );
};

interface IUserFieldsTranslations {
  email: string;
  name: string;
  surname: string;
}
