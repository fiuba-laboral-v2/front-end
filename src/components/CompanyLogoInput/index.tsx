import React, { FunctionComponent } from "react";

import { ImageUpload } from "$components/ImageUpload";
import { CompanyLogo } from "$components/CompanyLogo";

export const CompanyLogoInput: FunctionComponent<ICompanyLogoInputProps> = (
  {
    setLogo,
    className
  }
) => (
  <div className={className}>
    <ImageUpload onChange={images => setLogo(images[0].dataURL)}>
      {({ imageList, onImageUpload }) => (
        <CompanyLogo
          onClick={imageList[0]?.onUpdate || onImageUpload}
          companyName={"companyName"}
          logo={imageList[0]?.dataURL || "images/companyDefaultLogo.png"}
          size="extraLarge"
        />
      )}
    </ImageUpload>
  </div>
);

interface ICompanyLogoInputProps {
  setLogo: (logo: string) => void;
  className?: string;
}
