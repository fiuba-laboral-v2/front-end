import React, { FunctionComponent, useState } from "react";
import { ErrorLabel } from "./ErrorLabel";

export const CompanyPhoto: FunctionComponent<ICompanyPhotoProps> = ({
  url,
  companyName,
  hideWhenInvalid
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!hideWhenInvalid && hasError && <ErrorLabel url={url} />}
      {!hasError && <img src={url} alt={companyName} onError={() => setHasError(true)} />}
    </>
  );
};

interface ICompanyPhotoProps {
  key: number;
  url: string;
  companyName: string;
  hideWhenInvalid: boolean;
}
