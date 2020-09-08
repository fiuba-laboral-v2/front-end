import React, { FunctionComponent } from "react";
import { useSeparatedStatusTranslations } from "$hooks";
import { SeparatedStatusLabel } from "./component";
import { IContainerProps } from "./interfaces";

export const SeparatedStatusLabelContainer: FunctionComponent<IContainerProps> = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    targetApplicantType,
    ...props
  }
) => {
  const { graduados, extension } = useSeparatedStatusTranslations({
    targetApplicantType,
    graduadosApprovalStatus,
    extensionApprovalStatus
  });

  return <SeparatedStatusLabel
    {...props}
    extension={extension}
    graduados={graduados}
  />;
};
