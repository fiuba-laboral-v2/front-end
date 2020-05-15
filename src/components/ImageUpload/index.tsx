import React, { FunctionComponent } from "react";
import ImageUploading from "react-images-uploading";

export const ImageUpload: FunctionComponent<IImageUploadProps> = (
  {
    defaultValue,
    onChange,
    maxNumber = 1,
    maxFileSize = 5,
    multiple,
    acceptType = ["jpg", "gif", "png", "jpeg"],
    children
  }
) => (
  <ImageUploading
    defaultValue={defaultValue}
    onChange={onChange}
    maxNumber={maxNumber}
    maxFileSize={maxFileSize}
    acceptType={acceptType}
    multiple={multiple}
  >
    {children}
  </ImageUploading>
);

interface IErrors {
  maxNumber?: number;
  acceptType?: AcceptType[];
  maxFileSize?: number[];
}

interface IChildren {
  imageList: IImage[];
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  errors: IErrors;
}

interface IImage {
  dataURL: string;
  key: string;
  onUpdate: () => void;
  onRemove: () => void;
}

type AcceptType = "jpg" | "gif" | "png" | "jpeg";

interface IImageUploadProps {
  children: (values: IChildren) => React.ReactElement;
  onChange: (images: IImage[]) => void;
  defaultValue?: IImage;
  maxNumber?: number;
  maxFileSize?: number;
  multiple?: boolean;
  acceptType?: AcceptType[];
}
