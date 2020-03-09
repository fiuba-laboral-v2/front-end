export interface IFormFooterProps {
  onSubmit: (state: object) => void;
  onCancel: (state: object) => void;
  saveText: string;
  cancelText: string;
}

export interface IFormFooterContainerProps {
  onSubmit: (state: object) => void;
  onCancel: (state: object) => void;
}

