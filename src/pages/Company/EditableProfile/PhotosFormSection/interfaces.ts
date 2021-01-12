export interface IPhotosFormSectionContainerProps {
  photos?: string[];
  className?: string;
}

export interface IPhotosFormSectionProps extends IPhotosFormSectionContainerProps {
  translations?: ITranslations;
}

export interface ITranslations {
  sectionTitle: string;
  sectionSubtitle: string;
  upload: string;
  thenCopy: string;
  addPhoto: string;
  urlFieldTitle: string;
}
