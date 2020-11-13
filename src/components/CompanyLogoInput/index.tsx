import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ImageUpload } from "$components/ImageUpload";
import { CompanyLogo } from "$components/CompanyLogo";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import styles from "./styles.module.scss";

export const CompanyLogoInput: FunctionComponent<IComponentProps> = ({
  initialValue,
  setLogo,
  className
}) => (
  <ImageUpload onChange={images => setLogo(images[0].dataURL)}>
    {({ imageList, onImageUpload }) => (
      <div
        className={classNames(styles.inputContainer, className)}
        onClick={imageList[0]?.onUpdate || onImageUpload}
      >
        <div className={styles.overlay} />
        <CloudUploadOutlinedIcon className={styles.uploadIcon} fontSize="large" />
        <CompanyLogo
          className={styles.logo}
          logo={imageList[0]?.dataURL || initialValue}
          size="extraLarge"
          useDefaultIcon={false}
        />
      </div>
    )}
  </ImageUpload>
);

export interface IComponentProps {
  initialValue?: string;
  setLogo: (logo: string) => void;
  className?: string;
}
