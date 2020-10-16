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
  <div className={classNames(styles.inputContainer, className)}>
    <ImageUpload onChange={images => setLogo(images[0].dataURL)}>
      {({ imageList, onImageUpload }) => (
        <>
          <div
            className={classNames(styles.overlay, {
              [styles.visibility]: !initialValue
            })}
            onClick={imageList[0]?.onUpdate || onImageUpload}
          >
            <CloudUploadOutlinedIcon
              className={classNames(styles.uploadLogo, {
                [styles.visibility]: !initialValue
              })}
              fontSize="large"
            />
          </div>
          <CompanyLogo
            className={styles.logo}
            logo={imageList[0]?.dataURL || initialValue}
            size="extraLarge"
            useDefaultIcon={false}
          />
        </>
      )}
    </ImageUpload>
  </div>
);

export interface IComponentProps {
  initialValue?: string;
  setLogo: (logo: string) => void;
  className?: string;
}
