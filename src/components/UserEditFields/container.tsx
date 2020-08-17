import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { UserEditFields } from "./component";
import { IUserEditFieldsTranslations, IUserEditFieldsContainerProps } from "./interfaces";

export const UserEditFieldsContainer: FunctionComponent<IUserEditFieldsContainerProps> = (
  {
    className,
    name,
    surname
  }
) => {
  const translations = useTranslations<IUserEditFieldsTranslations>("userEditFields");
  if (!translations) return <Fragment />;
  return (
    <UserEditFields
      className={className}
      name={name}
      surname={surname}
      translations={translations}
    />
  );
};
