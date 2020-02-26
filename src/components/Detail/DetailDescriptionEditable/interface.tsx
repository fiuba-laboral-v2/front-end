export interface IDetailDescriptionEditableProps {
  setDescription: (newDescription: string) => void;
  submit?: () => void;
  defaultDescription: string;
}
