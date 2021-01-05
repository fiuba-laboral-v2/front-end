import React, { FunctionComponent } from "react";
import ImageUploading from "react-images-uploading";

//  Before changing this setting take into account that:
//
//      ImageUploading passes the file size through Math.round before comparing with maxFileSize
//
//      In App.ts, there's a specified limit to json size. You may need to change that setting too,
//      otherwise you may get "PayloadTooLargeError: request entity too large" on large images
//
const MAX_MB_FILE_SIZE = 0.5;

export const ImageUpload: FunctionComponent<IImageUploadProps> = ({
  defaultValue,
  onChange,
  maxNumber,
  multiple,
  acceptType,
  children
}) => (
  <ImageUploading
    defaultValue={defaultValue}
    onChange={onChange}
    maxNumber={maxNumber}
    maxFileSize={MAX_MB_FILE_SIZE}
    acceptType={acceptType}
    multiple={multiple}
  >
    {children}
  </ImageUploading>
);

interface IErrors {
  maxNumber: boolean;
  acceptType: boolean;
  maxFileSize: boolean;
}

interface IChildren {
  imageList: IImage[];
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  errors: IErrors;
}

interface IImage {
  dataURL: string;
  file?: File;
  key?: string;
  onUpdate?: () => void;
  onRemove?: () => void;
}

type AcceptType = "jpg" | "gif" | "png" | "jpeg";

interface IImageUploadProps {
  children?: (values: IChildren) => React.ReactNode;
  onChange?: (images: IImage[]) => void;
  defaultValue?: IImage[];
  maxNumber?: number;
  multiple?: boolean;
  acceptType?: AcceptType[];
}
