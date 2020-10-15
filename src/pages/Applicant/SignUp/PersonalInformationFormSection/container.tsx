import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { PersonalInformationFormSection } from "./component";
import { ITranslations, IContainer } from "./interfaces";

const PersonalInformationFormSectionContainer: FunctionComponent<IContainer> = ({ className }) => {
  const translations = useTranslations<ITranslations>("personalInformationSignUpFormSection");
  if (!translations) return <Fragment />;

  return <PersonalInformationFormSection translations={translations} className={className} />;
};

export { PersonalInformationFormSectionContainer };
