import React, { FunctionComponent } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { ImageUpload } from "$components/ImageUpload";
import { CompanyLogo } from "$components/CompanyLogo";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import styles from "./styles.module.scss";
import { FormHelperText } from "@material-ui/core";

export const CompanyLogoInput: FunctionComponent<IComponentProps> = ({
  initialValue,
  setLogo,
  className
}) => (
  <Tooltip title={"Icono de empresa"} placement="top-start">
    <div className={className}>
      <ImageUpload onChange={images => setLogo(images[0].dataURL)}>
        {({ imageList, onImageUpload, errors }) => (
          <>
            <div
              className={styles.inputContainer}
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
            <FormHelperText className={styles.formHelperText} error>
              {errors.maxFileSize ? "Tamaño máximo: 500MB" : " "}
            </FormHelperText>
          </>
        )}
      </ImageUpload>
    </div>
  </Tooltip>
);

export interface IComponentProps {
  initialValue?: string;
  setLogo: (logo: string) => void;
  className?: string;
}
