import React, { FunctionComponent } from "react";

import { ImageUpload } from "$components/ImageUpload";
import { CompanyLogo } from "$components/CompanyLogo";

import styles from "./styles.module.scss";

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
          className={styles.dropzone}
          onClick={imageList[0]?.onUpdate || onImageUpload}
          companyName={"companyName"}
          logo={imageList[0]?.dataURL || "images/imageUpload.png"}
          size="extraLarge"
        >
          <span className={styles.text}> Subir logo </span>
        </CompanyLogo>
      )}
    </ImageUpload>
  </div>
);

interface ICompanyLogoInputProps {
  setLogo: (logo: string) => void;
  className?: string;
}
