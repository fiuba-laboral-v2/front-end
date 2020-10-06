import React, { Fragment, FunctionComponent } from "react";
import { FiubaCredentialsFormSection } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

const FiubaCredentialsFormSectionContainer: FunctionComponent<IContainer> = ({ className }) => {
  const translations = useTranslations<ITranslations>("fiubaCredentialsFormSection");
  if (!translations) return <Fragment/>;
  return <FiubaCredentialsFormSection translations={translations} className={className} />;
};

export { FiubaCredentialsFormSectionContainer };
