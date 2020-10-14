import React, { FunctionComponent } from "react";

import { ImageUpload } from "$components/ImageUpload";
import { CompanyLogo } from "$components/CompanyLogo";

import { ICompanyLogoInputProps } from "./interfaces";
import styles from "./styles.module.scss";

export const CompanyLogoInput: FunctionComponent<ICompanyLogoInputProps> = ({
  initialValue,
  setLogo,
  translations,
  className
}) => (
  <div className={className}>
    <ImageUpload onChange={images => setLogo(images[0].dataURL)}>
      {({ imageList, onImageUpload }) => (
        <CompanyLogo
          className={styles.dropzone}
          onClick={imageList[0]?.onUpdate || onImageUpload}
          logo={imageList[0]?.dataURL || initialValue || "images/imageUpload.png"}
          size="extraLarge"
        >
          <span className={styles.text}>{translations.uploadLogo}</span>
        </CompanyLogo>
      )}
    </ImageUpload>
  </div>
);
