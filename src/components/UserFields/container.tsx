import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { UserFields } from "./component";
import { IUserFieldsContainerProps, IUserFieldsTranslations } from "./interfaces";

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
      email={email}
      name={name}
      surname={surname}
      translations={translations}
    />
  );
};
