import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { SecretarySelector } from "./component";
import { IContainerProps, IInstitutionsTranslations, ITitleTranslations } from "./interfaces";

export const SecretarySelectorContainer: FunctionComponent<IContainerProps> = props => {
  const title = useTranslations<ITitleTranslations>("secretarySelector")?.title;
  const institutions = useTranslations<IInstitutionsTranslations>("institutions");
  if (!title || !institutions) return <Fragment />;
  return <SecretarySelector translations={{ title, ...institutions }} {...props} />;
};
