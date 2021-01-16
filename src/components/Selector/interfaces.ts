import { ISelectFieldOption } from "../Fields/SelectField";

export type AdditionalOptions = "indeterminate";

interface ICommonProps {
  mandatory?: boolean;
  name: string;
  className?: string;
  label?: string;
}

export interface IContainerProps<Option, ITranslations> extends ICommonProps {
  options: Option[];
  translationGroup: string;
  getTitle: (translations: ITranslations) => string;
  getLabel: (translations: ITranslations, option: Option | AdditionalOptions) => string;
  additionalOptions?: AdditionalOptions[];
  excludedOptions?: Option[];
}

export interface IComponentProps<Option> extends ICommonProps {
  title: string;
  options: Array<ISelectFieldOption<Option | AdditionalOptions>>;
}
