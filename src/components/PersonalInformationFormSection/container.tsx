import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { PersonalInformationFormSection } from "./component";
import { ITranslations, IContainer } from "./interfaces";

const PersonalInformationFormSectionContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("personalInformationSignUpFormSection");
  if (!translations) return <Fragment />;

  return <PersonalInformationFormSection translations={translations} {...props} />;
};

export { PersonalInformationFormSectionContainer };
