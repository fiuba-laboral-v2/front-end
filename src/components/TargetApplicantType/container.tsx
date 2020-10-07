import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { TargetApplicantType } from "./component";
import { ITargetApplicantTypeContainer, ITranslations } from "./interfaces";

export const TargetApplicantTypeContainer: FunctionComponent<ITargetApplicantTypeContainer> =
  props => {
    const translations = useTranslations<ITranslations>("targetApplicantType");
    if (!translations) return <Fragment/>;
    return <TargetApplicantType translations={translations} {...props} />;
  };
